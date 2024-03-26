import { Component, OnInit, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsService } from 'src/app/core/services/products.service';
import { Product } from 'src/app/core/interfaces/product';
import { RouterLink } from '@angular/router';
import { CuttextPipe } from 'src/app/core/pipes/cuttext.pipe';
import { ToastrService } from 'ngx-toastr';
import { CartService } from 'src/app/core/services/cart.service';
import {NgxPaginationModule} from 'ngx-pagination'; 
import { WishListService } from 'src/app/core/services/wish-list.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule , RouterLink , CuttextPipe , NgxPaginationModule],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit{

  constructor(private _productsService:ProductsService , private _CartService:CartService , private _ToastrService:ToastrService , private _Renderer2:Renderer2,private _WishListService:WishListService){}

  products:Product[] = [];
  pageSize:number = 0; //limit
  curPage:number = 1; // currentPage
  total:number = 0; // results

  wishlistData:string[] = [];

  ngOnInit(): void {
    this._productsService.getProducts().subscribe({
      next:(response)=>{
  
        // console.log(response.data);
        this.products = response.data;

        this.pageSize = response.metadata.limit;       
        this.curPage = response.metadata.currentPage;
        this.total = response.results;
        
      }
    });
    
  }


  addProduct(id:number | undefined , element:HTMLButtonElement):void {

    this._Renderer2.setAttribute(element , 'disabled' , 'true');

    this._CartService.addToCart(id).subscribe({
      next:(response)=>{

        this._ToastrService.success(response.message);
        // console.log(response);

        this._Renderer2.removeAttribute(element , 'disabled');
       
        this._CartService.cartNumber.next(response.numOfCartItems);
       
        
      },
      error:()=>{
        this._Renderer2.removeAttribute(element , 'disabled');
      }
    });

  };


  pageChanged(event:any):void{

    this._productsService.getProducts(event).subscribe({
      next:(response)=>{
  
        // console.log(response.data);
        this.products = response.data;

        this.pageSize = response.metadata.limit;       
        this.curPage = response.metadata.currentPage;
        this.total = response.results;
        
      }
    });
    

  };


  addToFavList(prodId:number |undefined):void{

    this._WishListService.addToWishList(prodId).subscribe({
      next:(response)=>{
        
        this._ToastrService.success(response.message);
        this.wishlistData = response.data;
       
        // console.log('wishlist Response' , response.data.length);
        
        this._WishListService.wishlistNumber.next(response.data.length)
        
      }
    })
  };


  removeFromFavList(prodId:number |undefined):void{

    this._WishListService.removeItemFromWishList(prodId).subscribe({
      next:(response)=>{
       
        this._ToastrService.success(response.message);
        this.wishlistData = response.data;

        this._WishListService.wishlistNumber.next(response.data.length)
        
      }
    })
  };

  
}
