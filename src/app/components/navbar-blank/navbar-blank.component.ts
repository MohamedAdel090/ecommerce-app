import { response } from 'express';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-navbar-blank',
  templateUrl: './navbar-blank.component.html',
  styleUrl: './navbar-blank.component.scss'
})
export class NavbarBlankComponent implements OnInit{
  constructor(private _Router:Router, private _CartService:CartService){}
  cartCount: number = 0;

  ngOnInit(): void {
    this._CartService.cartNumber.subscribe({
      next:(data)=>{
        this.cartCount = data;
      }
    })
    this._CartService.getCart().subscribe({
      next:(response)=>{
        this._CartService.cartNumber.next(response.numOfCartItems)
      }
    })
  }
  signOut():void{
    localStorage.removeItem('_token');
    this._Router.navigate(['/login']);
  }
}
