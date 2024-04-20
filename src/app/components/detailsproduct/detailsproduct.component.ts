import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiDataService } from '../services/api-data.service';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-detailsproduct',
  templateUrl: './detailsproduct.component.html',
  styleUrl: './detailsproduct.component.scss'
})
export class DetailsproductComponent implements OnInit{
  constructor(private _ActivatedRoute:ActivatedRoute , private _ApiDataService:ApiDataService){}
  protectID:any;
  protectsDetails:any = null;

ngOnInit(): void {
  this._ActivatedRoute.paramMap.subscribe({
    next:(params)=>{
      this.protectID = params.get('id');
    }
  })


  this._ApiDataService.getproductsDetails(this.protectID).subscribe({
    next:(response)=>{
      this.protectsDetails = response.data
    }
  })

}

   productsSlider: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    navText: ['', ''],
    items: 1,
    autoplay:true,
    nav: false,
  }
}
