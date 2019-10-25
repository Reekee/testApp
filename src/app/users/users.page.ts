import { Component, OnInit } from '@angular/core';
import { SessionService } from '../session/session.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.page.html',
  styleUrls: ['./users.page.scss'],
})
export class UsersPage implements OnInit {
  users = [];
  search = "";
  constructor(
    private router: Router,
    private session: SessionService
  ) { }
  ngOnInit() {

  }
  ionViewWillEnter() {
    this.loadData(true);
  }
  loadData(isLoading) {
    this.session.ajax(this.session.api + "users-get.php", {
      search: this.search
    }, isLoading).then((res: any) => {
      if (res.status == true) {
        this.users = res.users;
      } else {
        this.session.showAlert(res.message);
      }
    }).catch(error => {
      this.session.showAlert(error);
    });
  }
  searching() {
    this.loadData(false);
  }
  edit(user: any) {
    this.router.navigateByUrl('/user-edit/' + user.user_id);
  }
  del(user: any) {
    this.session.showConfirm("Do you want to a delete ?").then(rs => {
      if (rs) {
        this.session.ajax(this.session.api + "user-del.php", {
          user_id: user.user_id
        }, true).then((res: any) => {
          if (res.status == true) {
            this.loadData(true);
          } else {
            this.session.showAlert(res.message);
          }
        }).catch(error => {
          this.session.showAlert(error);
        });
      }
    });
  }
}
