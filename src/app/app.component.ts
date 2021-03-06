import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { SessionService } from './session/session.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.scss']
})
export class AppComponent {
    public appPages = [
        {
            title: 'Home',
            url: '/home',
            icon: 'home'
        }
    ];

    constructor(
        private platform: Platform,
        private splashScreen: SplashScreen,
        private statusBar: StatusBar,
        private router: Router,
        private session: SessionService
    ) {
        this.initializeApp();
    }

    initializeApp() {
        this.platform.ready().then(async () => {
            this.statusBar.styleDefault();
            this.splashScreen.hide();

            this.session.status = await this.session.getStorage("status") || false;
            this.session.user = await this.session.getStorage("user") || {};
            let api = await this.session.getStorage("api") || false;
            if (api) this.session.api = api;
            this.session.ajax(this.session.api + 'check-testapp-api.php', {}, true).then(async (res: any) => {
                if (res.status) {
                    await this.session.setStorage("api", this.session.api);
                    //this.run();
                } else {
                    this.router.navigateByUrl('/set-api', { replaceUrl: true });
                }
            }).catch(error => {
                this.router.navigateByUrl('/set-api', { replaceUrl: true });
            });
        });
    }
    logout() {
        this.session.showConfirm("logout ใช่ไหม ?").then(rs => {
            if (rs) {
                this.session.status = false;
                this.session.user = {};
                this.session.removeStorage("status");
                this.session.removeStorage("user");
                this.router.navigateByUrl('/home');
            }
        });
    }
}
