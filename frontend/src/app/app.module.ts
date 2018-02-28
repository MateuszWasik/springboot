import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import {HttpModule} from "@angular/http";
import { UsersComponent } from './users/users.component';
import { HomeComponent } from './home/home.component';
import {routes} from "./app.routes";
import {RouterModule} from "@angular/router";


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    UsersComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
