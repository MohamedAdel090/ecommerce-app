import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiDataService {

  constructor(private _HttpClient:HttpClient) { }
  getproducts():Observable<any> {
  return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/products`)
  
}
  getproductsDetails(id:any):Observable<any> {
  return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`)
  
}
getCategories():Observable<any>{
  return this._HttpClient.get('https://ecommerce.routemisr.com/api/v1/categories')
}
}


