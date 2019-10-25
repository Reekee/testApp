import { Component } from '@angular/core';
import { SessionService } from '../session/session.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  user: any = {};
  constructor(
    private router: Router,
    private session: SessionService
  ) {
    this.loadUser();
  }
  async loadUser() {
    this.user = await this.session.getStorage("user") || {};
    console.log(this.user);
  }
  showUser() {
    this.router.navigateByUrl('/users');
  }
}
