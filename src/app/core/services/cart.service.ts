import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private _HttpClient:HttpClient) { }


  cartNumber:BehaviorSubject<number> = new BehaviorSubject(0);

  baseUrl:string = `https://ecommerce.routemisr.com/api/v1/`;


  addToCart(prodId:number | undefined):Observable<any>{
    return this._HttpClient.post(this.baseUrl  + `cart`, {
      productId: prodId
    })
  };


  getUserCart():Observable<any>{

    return this._HttpClient.get(this.baseUrl + `cart`);
  }


  removeCartItem(id:string):Observable<any>{

    return this._HttpClient.delete(this.baseUrl + `cart/` +`${id}`);
  }

  updateCount(updatedCount:number , prodId:string):Observable<any>{
    return this._HttpClient.put(this.baseUrl + `cart/${prodId}` , 
    
    {
      count: updatedCount
    });
  }

  clearCart():Observable<any>{

    return this._HttpClient.delete(this.baseUrl + `cart`);
  }


  checkOut(cardId:string | null , orderInfo:object):Observable<any>{

    return this._HttpClient.post(this.baseUrl + `orders/checkout-session/${cardId}?url=http://localhost:4200
    `,
    {
      shippingAddress:orderInfo
    })
  }
}
