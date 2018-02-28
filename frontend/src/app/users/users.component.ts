import {Component, OnInit} from '@angular/core';
import {Http} from "@angular/http";
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-users',
  template: `
    <h1>Users</h1>
    <ul>
    <li *ngFor="let user of users">
      {{user | json}}
    </li>
    </ul>
`})

export class UsersComponent implements OnInit {

  users: Array<string>

  theDataSource: Observable<string>;

  constructor(private http: Http) {

    this.theDataSource = this.http.get('/users').map(r => r.json())
  }

  ngOnInit() {

    this.theDataSource.subscribe(
      data => {
        if (Array.isArray(data)) {
          this.users = data;
        } else {
          this.users.push();
        }
      }
    )
  }

}
