import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Token } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private _HttpClient:HttpClient) { }

  cartNumber:BehaviorSubject<number>  = new BehaviorSubject(0)
myHeaders:any = {
            Token:localStorage.getItem(`_token`)
};
  addToCart(id:string):Observable<any> {
    return this._HttpClient.post('https://ecommerce.routemisr.com/api/v1/cart',    
    {
    productId: id,
    },
        {
          headers:this.myHeaders
          }
    )
  };
  getCart():Observable<any>{
    return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/cart`,
    {
      headers:this.myHeaders
    }
    )
  };

  checkOut(cartId:string , orderDetails:object):Observable<any>{
    return this._HttpClient.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartId}?url=http://localhost:4200` , 
    
    {
    shippingAddress: orderDetails
    },
{
  headers:this.myHeaders
}
    )
  };

  removeCartItem(id:string):Observable<any> {
    return this._HttpClient.delete(`https://ecommerce.routemisr.com/api/v1/cart/${id}`,
    {
  headers:this.myHeaders
    }
    
    ) 
  };
  ubdateCart(id:string, countItem:number):Observable<any> {
    return this._HttpClient.put(`https://ecommerce.routemisr.com/api/v1/cart/${id}`,
    
    {
    count: countItem
    },
{
  headers: this.myHeaders
}

    )
  };
};
