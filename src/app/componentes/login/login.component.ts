import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login:Object = {
    email: "",
    password: null
  }


  guardarDatos(forms:any){
    console.log(forms.value);
  }


  constructor() { }

  ngOnInit() {
  }

}
