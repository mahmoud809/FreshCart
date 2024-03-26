import { Component, OnInit, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WishListService } from 'src/app/core/services/wish-list.service';
import { Product } from 'src/app/core/interfaces/product';
import { CartService } from 'src/app/core/services/cart.service';
import { ToastrService } from 'ngx-toastr';
import { CuttextPipe } from 'src/app/core/pipes/cuttext.pipe';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-wish-list',
  standalone: true,
  imports: [CommonModule,CuttextPipe,RouterLink],
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.scss']
})
export class WishListComponent implements OnInit{

  constructor
  (private _WishListService:WishListService,
  private _CartService:CartService,
  private _ToastrService:ToastrService,
  private _Renderer2:Renderer2,
    ){}

  products:Product[] = [];
  wishlistData:string[] = [];


  ngOnInit(): void {
    this._WishListService.getWishList().subscribe({
      next:(response)=>{
       this.products = response.data;
       const newFormatData:any = response.data.map( (item:any) => item._id );
       this.wishlistData = newFormatData;
        
      }
    })
  }


  addProduct(id:number | undefined , element:HTMLButtonElement):void {

    this._Renderer2.setAttribute(element , 'disabled' , 'true');

    this._CartService.addToCart(id).subscribe({
      next:(response)=>{

        this._ToastrService.success(response.message);
        

        this._Renderer2.removeAttribute(element , 'disabled');
       
        this._CartService.cartNumber.next(response.numOfCartItems);
       
        
      },
      error:()=>{
        this._Renderer2.removeAttribute(element , 'disabled');
      }
    });

  };
  

  addToFavList(prodId:number |undefined):void{

    this._WishListService.addToWishList(prodId).subscribe({
      next:(response)=>{
        
        this._ToastrService.success(response.message);
        this.wishlistData = response.data;
       
        
        
      }
    })
  };

  removeFromFavList(prodId:number |undefined):void{

    this._WishListService.removeItemFromWishList(prodId).subscribe({
      next:(response)=>{
       
        this._ToastrService.success(response.message);
        this.wishlistData = response.data;
        
        const newProductData = this.products.filter( (item:any)=> this.wishlistData.includes(item._id) );
        this.products = newProductData;
        
        this._WishListService.wishlistNumber.next(response.data.length);
      }
    });
  };


}
