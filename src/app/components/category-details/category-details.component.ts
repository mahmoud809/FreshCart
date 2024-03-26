import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsService } from 'src/app/core/services/products.service';
import { ActivatedRoute } from '@angular/router';
import { Category } from 'src/app/core/interfaces/category';

@Component({
  selector: 'app-category-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './category-details.component.html',
  styleUrls: ['./category-details.component.scss']
})
export class CategoryDetailsComponent implements OnInit{

  constructor(private _ProductsService:ProductsService , private _ActivatedRoute:ActivatedRoute){}

  categoryId:string | null ='';
  categoryDetails:Category = {} as Category;

ngOnInit(): void {
  
  this._ActivatedRoute.paramMap.subscribe({

    next:(params)=>{
      this.categoryId = params.get('id');
    }
  })

  this._ProductsService.getCategoryDetails(this.categoryId).subscribe({
    next:(response)=>{

      this.categoryDetails = response.data;
      
    }
  })
}
}
