import {Component, OnInit} from '@angular/core';
import {dataservice} from "../dataservice/dataservice";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  username: string;

  constructor(private dataservice: dataservice){

  }

  onSubmit(username) {
    this.dataservice.addUserService(username);
  }

  ngOnInit() {

  }

}
