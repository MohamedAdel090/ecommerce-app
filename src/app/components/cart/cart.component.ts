import { response } from 'express';
import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent implements OnInit {
  constructor (private _CartService:CartService){}
  cartData:any = {}
  ngOnInit(): void {
    this._CartService.getCart().subscribe({
      next:(response)=>{
        console.log(response.data)
        this.cartData = response.data
      }
    })
  }

  removeItem(id:string):void{
    this._CartService.removeCartItem(id).subscribe({
      next:(response)=>{
        this.cartData = response.data;
        this._CartService.cartNumber.next(response.numOfCartItems);
      }
    })
  }

  changeCuont(count:number , id:string):void{
    if(count >= 1){
    this._CartService.ubdateCart( id , count ).subscribe({
      next:(response)=>{
        console.log(response),
        this.cartData = response.data
      }
    })
    }
  }
}
