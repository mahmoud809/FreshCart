
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private _httpClient:HttpClient) { }

  baseUrl:string = `https://ecommerce.routemisr.com/api/v1/auth/`;

  userInfo:any;

  register(userData:object): Observable<any> {

    return this._httpClient.post(this.baseUrl + `signup` , userData);
  }

  login(userData:object): Observable<any> {

    return this._httpClient.post(this.baseUrl + `signin` , userData);
  }



  decodeUser():void{
    const encode = localStorage.getItem('eToken');
    if(encode !== null)
    {
      const decode = jwtDecode(encode);
      
      this.userInfo = decode;
      // console.log(decode);
      
    }
  }
}
