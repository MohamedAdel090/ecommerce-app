import { Component } from '@angular/core';
import { FormControl, FormGroup , Validators} from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-regester',
  templateUrl: './regester.component.html',
  styleUrl: './regester.component.scss'
})
export class RegesterComponent {

    constructor(private _AuthService:AuthService, private _Router:Router){

  }
  errmsg:string  = '';
  isLoding:boolean =false;

registerForm:FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required , Validators.minLength(3), Validators.maxLength(10)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password:new FormControl('', [Validators.required, Validators.pattern(/^\w{6,}$/)]),
    rePassword:new FormControl(/^\w{6,}$/),
    phone:new FormControl('', [Validators.required, Validators.pattern(/^01[0125][0-9]{8}$/)])
})

handelRegistar():void{
    const userData = this.registerForm.value;
    const isValid  =this.registerForm.valid;
    this.isLoding = true;
    if(isValid){
      this._AuthService.registarForm(userData).subscribe({
        next:(response)=>{
          if(response.message === "success"){
            this._Router.navigate(['/login'])
            this.isLoding = false
          }
          console.log(response)
        },
        error:(err)=>{
        this.errmsg = err.error.message
        this.isLoding
        }
      })
    }
}

}
