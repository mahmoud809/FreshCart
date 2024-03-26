import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Brands } from 'src/app/core/interfaces/brands';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/core/services/products.service';

@Component({
  selector: 'app-brand-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './brand-details.component.html',
  styleUrls: ['./brand-details.component.scss']
})
export class BrandDetailsComponent implements OnInit{
  constructor(private _ProductsService:ProductsService , private _ActivatedRoute:ActivatedRoute){}

  brandId:string | null ='';
  brandDetails:Brands = {} as Brands;

  ngOnInit(): void {
  
    this._ActivatedRoute.paramMap.subscribe({
  
      next:(params)=>{
        this.brandId = params.get('id');
      }
    })
  
    this._ProductsService.getBrandDetails(this.brandId).subscribe({
      next:(response)=>{
  
        this.brandDetails = response.data;
        
      }
    })
  }
}
