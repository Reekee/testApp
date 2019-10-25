import { Component, OnInit } from '@angular/core';
import { SessionService } from '../session/session.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  user_name = "";
  user_lname = "";
  gender_id = "";
  status_id = "";
  username = "";
  password = "";
  type_id = "";
  genders = [];
  statuss = [];
  types = [];
  constructor(
    private router: Router,
    private session: SessionService
  ) { }
  ngOnInit() {
    this.loadData(true);
  }
  loadData(isLoading) {
    this.session.ajax(this.session.api + "register-get.php", {
    }, isLoading).then((res: any) => {
      if (res.status == true) {
        this.genders = res.genders;
        this.statuss = res.statuss;
        this.types = res.types;
      } else {
        this.session.showAlert(res.message);
      }
    }).catch(error => {
      this.session.showAlert(error);
    });
  }
  register() {
    this.session.ajax(this.session.api + "register-set.php", {
      user_name: this.user_name,
      user_lname: this.user_lname,
      gender_id: this.gender_id,
      status_id: this.status_id,
      username: this.username,
      password: this.password,
      type_id: this.type_id
    }, true).then((res: any) => {
      if (res.status == true) {
        this.session.showAlert("ลงทะเบียนแล้ว").then(rs => {
          this.router.navigateByUrl('/login');
        });
      } else {
        this.session.showAlert(res.message);
      }
    }).catch(error => {
      this.session.showAlert(error);
    });
  }
  clear() {
    this.user_name = "";
    this.user_lname = "";
    this.gender_id = "";
    this.status_id = "";
    this.username = "";
    this.password = "";
    this.type_id = "";
  }
}
