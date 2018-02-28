import {Component, OnInit} from '@angular/core';
import {Http} from "@angular/http";

@Component({
  selector: 'app-users',
  template: `
    <h1>Users</h1>
    <ul>
    <li *ngFor="let user of users">
      {{user.id}} {{user.name}}
    </li>
    </ul>
`})

export class UsersComponent implements OnInit {

  users: Array<string>

  user = [{id: 1, name : "temporary"}, {id: 2, name: "temp"}];

  constructor(private http: Http) {

  }

  ngOnInit() {

    this.http.get('/users').toPromise().then(r => r.json()).then(r=> this.user = r);
  }

}
