import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {User} from "../models/user";
import {Observable} from "rxjs/Observable";

@Injectable()
export class dataservice {

  private usersUrl = '/users';

  constructor(private http: HttpClient) {

  }

  addUserService(username: String){
    var headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(this.usersUrl, username, {headers})
      .subscribe(data => console.log(data))
  }

  getUsersService(): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl);
  }

  editUserService(id: number) {
    return this.http.put(this.usersUrl + "/", id);
  }

  deleteUserService(id: number){
    return this.http.delete(this.usersUrl + "/" + id)
      .subscribe(data => console.log(data))
  }


}
