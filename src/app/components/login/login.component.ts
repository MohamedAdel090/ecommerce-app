import { Component } from '@angular/core';
import { FormControl, FormGroup , Validators} from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl:'./login.component.html',
  styleUrl: './login.component.scss'

})
export class LoginComponent {

      constructor(private _AuthService:AuthService, private _Router:Router){

  }
  errmsg:string  = '';
  isLoding:boolean = false;

loginForm:FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password:new FormControl('', [Validators.required, Validators.pattern(/^\w{6,}$/)]),
})

handelRegistar():void{
    const userData = this.loginForm.value;
    const isValid  =this.loginForm.valid;
    this.isLoding = true;
    if(isValid){
      this._AuthService.loginForm(userData).subscribe({
        next:(response)=>{
          if(response.message == "success"){
            localStorage.setItem('_token' , response.token)
            this._AuthService.decodeToken()
            this._Router.navigate(['/home'])
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
