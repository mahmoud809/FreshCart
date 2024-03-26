import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WishListService {
  constructor(private _HttpClient:HttpClient) { }

  wishlistNumber:BehaviorSubject<number> = new BehaviorSubject(0);
  
  baseUrl:string = `https://ecommerce.routemisr.com/api/v1/`;
  
  addToWishList(prodId:number | undefined):Observable<any>{
    return this._HttpClient.post(this.baseUrl + `wishlist` , 
    {
      productId: prodId
    });
  };


  getWishList():Observable<any>{

   return  this._HttpClient.get(this.baseUrl + `wishlist`);
  };

  removeItemFromWishList(prodId: number | undefined):Observable<any>{

   return  this._HttpClient.delete(this.baseUrl + `wishlist/${prodId}`);
  };
  
}