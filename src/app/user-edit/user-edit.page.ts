import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SessionService } from '../session/session.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.page.html',
  styleUrls: ['./user-edit.page.scss'],
})
export class UserEditPage implements OnInit {
  user_id = "";
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
    private route: ActivatedRoute,
    private router: Router,
    private session: SessionService
  ) { }
  ngOnInit() {
    this.user_id = this.route.snapshot.paramMap.get('user_id');
    this.loadData(true);
  }
  loadData(isLoading) {
    this.session.ajax(this.session.api + "user-get.php", {
      user_id: this.user_id
    }, isLoading).then((res: any) => {
      if (res.status == true) {
        this.genders = res.genders;
        this.statuss = res.statuss;
        this.types = res.types;

        this.user_name = res.user.user_name;
        this.user_lname = res.user.user_lname;
        this.gender_id = res.user.gender_id;
        this.status_id = res.user.status_id;
        this.username = res.user.username;
        this.password = res.user.password;
        this.type_id = res.user.type_id;

      } else {
        this.session.showAlert(res.message);
      }
    }).catch(error => {
      this.session.showAlert(error);
    });
  }
  edit() {
    this.session.ajax(this.session.api + "user-edit.php", {
      user_id: this.user_id,
      user_name: this.user_name,
      user_lname: this.user_lname,
      gender_id: this.gender_id,
      status_id: this.status_id,
      username: this.username,
      password: this.password,
      type_id: this.type_id
    }, true).then((res: any) => {
      if (res.status == true) {
        this.session.showAlert("แก้ไขแล้ว").then(rs => {
          this.router.navigateByUrl('/users');
        });
      } else {
        this.session.showAlert(res.message);
      }
    }).catch(error => {
      this.session.showAlert(error);
    });
  }
}
