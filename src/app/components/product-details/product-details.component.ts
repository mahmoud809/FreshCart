import { Component, OnInit, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/core/services/products.service';
import { ToastrService } from 'ngx-toastr';
import { CartService } from 'src/app/core/services/cart.service';



@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit{
  constructor(private _activatedRoute:ActivatedRoute, private _productsService:ProductsService , private _CartService:CartService, private _ToastrService:ToastrService ,private _Renderer2:Renderer2){}

  productId!:string | null;
  productDetails:any = null;

  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe({
      next:(params)=>{
        
        this.productId = params.get('_id');
        
      }
    });


    this._productsService.getProductDetails(this.productId).subscribe({
      next:(response)=>{

        // console.log(response.data);
        this.productDetails = response.data;
      }
    })

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
  
  

  
}
