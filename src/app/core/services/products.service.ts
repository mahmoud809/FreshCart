import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private _httpClient:HttpClient) { }

  baseUrl:string = `https://ecommerce.routemisr.com`;
  
  getProducts(pageNum:number = 1):Observable<any> {

    return this._httpClient.get(this.baseUrl + `/api/v1/products?page=${pageNum}`);
  }

  getCategories():Observable<any> {

    return this._httpClient.get(this.baseUrl + `/api/v1/categories`);
  }

  getCategoryDetails(categoryId:string | null):Observable<any> {

    return this._httpClient.get(this.baseUrl + `/api/v1/categories/${categoryId}`);
  }


  getProductDetails(id:string | null ):Observable<any> {

    return this._httpClient.get(this.baseUrl + `/api/v1/products/` + `${id}`);
  }
  
  getBrands():Observable<any> {

    return this._httpClient.get(this.baseUrl + `/api/v1/brands`);
  }

  getBrandDetails(brandId:string | null):Observable<any> {

    return this._httpClient.get(this.baseUrl + `/api/v1/brands/${brandId}`);
  }

}
