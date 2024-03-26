import { Component, OnInit, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from 'src/app/core/services/cart.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule , RouterLink],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  constructor(private _CartService:CartService, private _Renderer2:Renderer2){}

  cartDetails:any = null;

  ngOnInit(): void {
    
    this._CartService.getUserCart().subscribe({
      next:(response)=>{

        this.cartDetails = response.data;
        // console.log(this.cartDetails);
        
      }
    })
  }



  removeItem(id:string , element:HTMLButtonElement):void{

    this._Renderer2.setAttribute(element , 'disabled' , 'true');

    this._CartService.removeCartItem(id).subscribe({
      next:(response)=>{
        
        this._Renderer2.removeAttribute(element , 'disabled');
        this.cartDetails = response.data;
        this._CartService.cartNumber.next(response.numOfCartItems);
      },
      error:(err)=>{

        this._Renderer2.removeAttribute(element , 'disabled');
      }
    })
  }


  changeCount(updatedCount:number , prodId:string , element1:HTMLButtonElement , element2:HTMLButtonElement):void{

      if(updatedCount >= 1) {

        this._Renderer2.setAttribute(element1 , 'disabled' , 'true');
        this._Renderer2.setAttribute(element2 , 'disabled' , 'true');
        
        this._CartService.updateCount(updatedCount,prodId).subscribe({
      
          next:(response)=>{
    
            this.cartDetails = response.data;
            this._Renderer2.removeAttribute(element1 , 'disabled');
            this._Renderer2.removeAttribute(element2 , 'disabled');
            
          },
          error:(err)=>{
            this._Renderer2.removeAttribute(element1 , 'disabled');
            this._Renderer2.removeAttribute(element2 , 'disabled');
          }
        })
      }
    
  }


  clearAllCart():void{
    this._CartService.clearCart().subscribe({

      next:(response)=>{

        if(response.message ==="success"){
          this.cartDetails = null;
          this._CartService.cartNumber.next(0)
        }
        
      }
    })
  }

}
