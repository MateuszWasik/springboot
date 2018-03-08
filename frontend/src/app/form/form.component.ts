import {Component, OnInit, ViewChild} from '@angular/core';
import {dataservice} from "../dataservice/dataservice";
import {NgForm} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  username: string;

  @ViewChild('myForm')
  private myForm: NgForm;

  constructor(private dataservice: dataservice, private router: Router){

  }

  onSubmit(username) {
    this.dataservice.addUserService(username);
    this.myForm.reset();
    this.router.navigateByUrl('/users');
  }

  toUsers(){
    this.router.navigateByUrl('/users');
  }

  ngOnInit() {
  }

}
