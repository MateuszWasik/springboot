import { Routes} from "@angular/router";
import {UsersComponent} from "./users/users.component";
import {HomeComponent} from "./home/home.component";
import {FormComponent} from "./form/form.component";
import {UserEditComponent} from "./users/user-edit/user-edit.component";


export const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'users', component: UsersComponent},
  {path: 'form', component: FormComponent},
  {path: 'edit', component: UserEditComponent, pathMatch: 'full'}
];
