import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {User} from "../../models/user";

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {


  constructor(private router: Router, private http: HttpClient) {
  }

  ngOnInit() {
  }

  handleSave(user: User) {

    this.postRequest(user).subscribe(() =>
    this.router.navigate(['users']))

  }

  postRequest(user: User) {
    return this.http.post<any>('http://localhost:8080/users', user)

  }
}
