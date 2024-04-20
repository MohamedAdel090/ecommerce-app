import { response } from 'express';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { category } from '../../data-interface';
import { ApiDataService } from './../services/api-data.service';
import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  constructor(private _ApiDataService:ApiDataService ,private _CartService:CartService ){}

  products:any[] = [];

  categories:category[] = []

  ngOnInit(): void {
    this._ApiDataService.getproducts().subscribe({
      next:(response)=>{
        this.products = response.data
      }
    })

    this._ApiDataService.getCategories().subscribe({
      next:(response)=>{
        this.categories = response.data
      }
    })
  }

    customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 6
      }
    },
    autoplay:true,
    nav: true
  }

    mainSlider: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    items: 1,
    autoplay:true,
    nav: true
  }



  addProduct(id:string):void{
    this._CartService.addToCart(id).subscribe({
      next:(response)=>{
        console.log(response)
        this._CartService.cartNumber.next(response.numOfCartItem)
        // console.log(this._CartService.cartNumber)
      }
    })
  }
}


