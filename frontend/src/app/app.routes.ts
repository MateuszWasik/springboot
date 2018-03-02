import { Routes} from "@angular/router";
import {UsersComponent} from "./users/users.component";
import {HomeComponent} from "./home/home.component";
import {FormComponent} from "./form/form.component";


export const routes: Routes = [
  {path: '', component: HomeComponent, pathMatch: 'full'},
  {path: 'users', component: UsersComponent},
  {path: 'form', component: FormComponent}
];
