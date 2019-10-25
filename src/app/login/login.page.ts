import { Component, OnInit } from '@angular/core';
import { SessionService } from '../session/session.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  username = "somchai";
  password = "1234";
  constructor(
    private router: Router,
    private session: SessionService
  ) { }

  ngOnInit() {
  }
  login() {

    this.session.ajax(this.session.api + "login.php", {
      username: this.username,
      password: this.password
    }, true).then((res: any) => {
      if (res.status == true) {
        this.session.showAlert("Login สำเร็จ").then(rs => {
          this.session.status = true;
          this.session.setStorage("status", res.status);
          this.session.setStorage("user", res.user);
          this.router.navigateByUrl('/home');
        });
      } else {
        this.session.showAlert(res.message);
      }
    }).catch(error => {
      this.session.showAlert(error);
    });




    // alert(this.username);
    // alert(this.password);
    // if (false) {
    //   alert("OK");
    // } else {
    //   alert("NO");
    // }

  }
  clear() {
    this.username = "";
    this.password = "";
  }
}
