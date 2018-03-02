import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "../models/user";
import {Observable} from "rxjs/Observable";

@Injectable()
export class dataservice {

  private usersUrl = '/users';

  constructor(private http: HttpClient) {

  }

  getUsersService(): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl);
  }

  editUserService(id: number) {
    return this.http.put(this.usersUrl + "/", id);
  }

  deleteUserService(id: number): Observable<User> {
    console.log(this.usersUrl+"/"+id)
    return this.http.delete<User>(this.usersUrl + "/" + id);
  }


}
