import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from '../session/session.service';

@Component({
  selector: 'app-checkname',
  templateUrl: './checkname.page.html',
  styleUrls: ['./checkname.page.scss'],
})
export class ChecknamePage implements OnInit {
  student_id = '';
  constructor(
    private router: Router,
    private session: SessionService
  ) { }
  ngOnInit() {
  }
  save() {
    this.session.ajax(this.session.api + "checkname.php", {
      student_id: this.student_id,
    }, true).then((res: any) => {
      if (res.status == true) {
        this.session.showAlert("บันทึกสำเร็จ").then(rs => {
          this.router.navigateByUrl('/home');
        });
      } else {
        this.session.showAlert(res.message);
      }
    }).catch(error => {
      this.session.showAlert(error);
    });
  }
  clear() {
    this.student_id = "";
  }
}
