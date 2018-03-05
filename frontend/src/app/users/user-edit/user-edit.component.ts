import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {dataservice} from "../../dataservice/dataservice";

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  userId : number;

  constructor(private router: Router, private dataservice: dataservice, private route: ActivatedRoute) {
  }

  ngOnInit() {

  }

  goToUsers() {
    this.router.navigateByUrl('/users');
  }

  onSave(username){

    this.dataservice.editUserService(this.userId, username).then(res => this.goToUsers())}


}
