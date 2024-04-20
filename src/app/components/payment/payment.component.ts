import { response } from 'express';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.scss'
})
export class PaymentComponent implements OnInit {


  constructor(private _ActivatedRoute:ActivatedRoute, private _FormBuilder:FormBuilder, private _CartService:CartService){}


checkForm:FormGroup = this._FormBuilder.group({
  details:[''],
  phone:[''],
  city:['']

})


 cartID:any = ''

ngOnInit(): void {
  this._ActivatedRoute.paramMap.subscribe({
    next:(params)=>{
      this.cartID = params.get('id')
      console.log( params.get('id'))
    }
  })
}
  handelForm():void{
    // console.log(this.checkForm.value)
    this._CartService.checkOut(this.cartID, this.checkForm.value).subscribe({
      next:(response)=>
        window.open(response.session.url, '_self')
      
    })
  }
}
