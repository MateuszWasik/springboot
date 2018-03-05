import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import {HttpModule} from "@angular/http";
import { UsersComponent } from './users/users.component';
import { HomeComponent } from './home/home.component';
import {routes} from "./app.routes";
import {RouterModule} from "@angular/router";
import { FormComponent } from './form/form.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {dataservice} from "./dataservice/dataservice";
import { UserEditComponent } from './users/user-edit/user-edit.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    UsersComponent,
    HomeComponent,
    FormComponent,
    UserEditComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpClientModule,
  ],
  providers: [dataservice],
  bootstrap: [AppComponent]
})
export class AppModule { }
