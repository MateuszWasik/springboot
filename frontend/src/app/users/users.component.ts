import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {User} from "../models/user";
import {dataservice} from "../dataservice/dataservice";


@Component({
  selector: 'app-users',
  template: `
    <h1>Users</h1>
    <table class="table">
      <tr>
        <th>Id</th>
        <th>Name</th>
      </tr>
      <tr *ngFor="let user of users">
        <td>{{user.id}}</td>
        <td>{{user.name}}</td>
        <td>
          <button type="button" class="btn btn-warning" (click)="editUser(user.id)">Edit</button>
          <button type="button" class="btn btn-danger" (click)="deleteUser(user.id)">Delete</button>
        </td>
      </tr>
    </table>

  `
})

export class UsersComponent implements OnInit {

  users: User[];

  constructor(private dataservice: dataservice) {
  }

  ngOnInit() {
    this.getUsers();
  }

  getUsers(): void {
    this.dataservice.getUsersService()
      .subscribe(
        resultArray => this.users = resultArray
      )
  }

    editUser(id : number) {
      this.dataservice.deleteUserService(id);
    }

  deleteUser(id: number) {
    this.dataservice.deleteUserService(id);
  }

}
