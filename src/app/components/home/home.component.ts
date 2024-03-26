import { Component, OnInit, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsService } from 'src/app/core/services/products.service';
import { Product } from 'src/app/core/interfaces/product';
import { CuttextPipe } from 'src/app/core/pipes/cuttext.pipe';
import { Category } from 'src/app/core/interfaces/category';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { RouterLink } from '@angular/router';
import { CartService } from 'src/app/core/services/cart.service';
import { ToastrService } from 'ngx-toastr';
import { FormsModule } from '@angular/forms';
import { SearchPipe } from 'src/app/core/pipes/search.pipe';
import { WishListService } from 'src/app/core/services/wish-list.service';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,CuttextPipe,CarouselModule,RouterLink ,FormsModule,SearchPipe],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export default class HomeComponent implements OnInit{
  constructor(private _productsService:ProductsService , private _CartService:CartService , private _ToastrService:ToastrService , private _Renderer2:Renderer2,private _WishListService:WishListService){}

  products:Product[] = []; 
  categories:Category[] = [];
  searchTerm:string = '';
  wishlistData:string[] = [];

  ngOnInit(): void {

  this._productsService.getProducts().subscribe({
    next:(response)=>{

      // console.log(response.data);
      this.products = response.data;
      
    }
  });
  
  this._productsService.getCategories().subscribe({
    next:(response)=>{

      this.categories = response.data;
      // console.log( 'categories',this.categories);
      
    }
  });


  this._WishListService.getWishList().subscribe({
    next:(response)=>{
  
      const newFormatData:any = response.data.map( (item:any) => item._id );
      
      this.wishlistData = newFormatData;
      
    }
  })
  };



  categoryOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    navText: ['', ''],
    autoplay:true,
    autoplayTimeout:7000,
    autoplaySpeed:1000,
    responsive: {
      0: {
        items: 2
      },
      400: {
        items: 3
      },
      740: {
        items: 4
      },
      940: {
        items: 6
      }
    },
    nav: false
  };


  mainSliderOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    navText: ['', ''],
    autoplay:true,
    autoplayTimeout:5000,
    autoplaySpeed:1500,
    items:1,
    nav: false
  };


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

        this._WishListService.wishlistNumber.next(response.data.length);
        
      }
    })
  };


}
