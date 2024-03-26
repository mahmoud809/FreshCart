import { Component, ElementRef, HostListener, OnInit, Renderer2, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { CartService } from 'src/app/core/services/cart.service';
import { WishListService } from 'src/app/core/services/wish-list.service';

@Component({
  selector: 'app-nav-blank',
  standalone: true,
  imports: [CommonModule, RouterLink , RouterLinkActive],
  templateUrl: './nav-blank.component.html',
  styleUrls: ['./nav-blank.component.scss']
})
export class NavBlankComponent implements OnInit {
  constructor(private _Router:Router , private _CartService:CartService, private _Renderer2:Renderer2,private _WishListService:WishListService){}

  @ViewChild('navBar') navElement!:ElementRef; // keda ana mesekt el-element

  @HostListener('window:scroll')
  scrollNav():void{
    if(scrollY > 500)
    {
      this._Renderer2.addClass(this.navElement.nativeElement , 'py-3');
      this._Renderer2.addClass(this.navElement.nativeElement , 'px-5');
      this._Renderer2.addClass(this.navElement.nativeElement , 'shadow');
    }
    else{
      this._Renderer2.removeClass(this.navElement.nativeElement , 'py-3');
      this._Renderer2.removeClass(this.navElement.nativeElement , 'px-5');
      this._Renderer2.removeClass(this.navElement.nativeElement , 'shadow');
    }

  }
  
  countNum:number = 0;
  wishNum:number = 0;

  ngOnInit(): void {
    
    this._CartService.cartNumber.subscribe({
      // "data" contains => new value that changed
        next:(data)=>{

          this.countNum = data;
          
        }
      });

      this._CartService.getUserCart().subscribe({
        next:(response)=>{

          this.countNum = response.numOfCartItems;
          
        }
      });

      this._WishListService.wishlistNumber.subscribe({
        next:(data)=>{
          
          this.wishNum = data;
        }
        
      });

      this._WishListService.getWishList().subscribe({
        next:(response)=>{
          this.wishNum = response.count;
          
        }
      })

  }



  signOut():void{

    localStorage.removeItem('eToken');

    this._Router.navigate(['/login']);
  }

}
