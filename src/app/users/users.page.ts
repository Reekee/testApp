import { Component, OnInit } from '@angular/core';
import { SessionService } from '../session/session.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.page.html',
  styleUrls: ['./users.page.scss'],
})
export class UsersPage implements OnInit {
  users = [];
  search = "";
  constructor(
    private session: SessionService
  ) { }
  ngOnInit() {
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
}
