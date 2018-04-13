import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {Router} from "@angular/router";

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  forma:FormGroup;
  Usuario:any={
    Correo: "",
    Password: "",
    SamePassword: ""
  }
  constructor(private router: Router) {

    this.forma = new FormGroup({
      'Correo': new FormControl('', Validators.required),
      'Password': new FormControl('', Validators.required),
      'SamePassword': new FormControl()
    })

    //this.forma.setValue(this.Usuario);

    this.forma.controls['SamePassword'].setValidators([
      Validators.required,
      this.ComparacionPassword.bind(this.forma)
    ])

   }
  guardarCambios(){
    console.log(this.forma.value)
    this.forma.reset();
    this.router.navigate(['/login']);
  }

  ComparacionPassword (control: FormControl): {[s:string]:boolean}{
    let forma:any = this;
    if( control.value !== forma.controls['Password'].value ){
      return {
        Comparacionpassword:true
      }
    }

      return null
  }

  ngOnInit() {
  }

}
