import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsService } from 'src/app/core/services/products.service';
import { Brands } from 'src/app/core/interfaces/brands';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-brands',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.scss']
})
export class BrandsComponent implements OnInit{

  constructor(private _ProductsService:ProductsService){}

  brands:Brands[] = [];

  ngOnInit(): void {
    
    this._ProductsService.getBrands().subscribe({
      next:(response)=>{

        this.brands = response.data;
        
      }
    })
  }
}
