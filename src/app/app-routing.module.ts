import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './core/guard/auth.guard';

const routes: Routes = [
  //blank
  {path:'' ,
  canActivate:[authGuard],
  loadComponent:()=>import('./components/blank-layout/blank-layout.component').then((m)=>m.BlankLayoutComponent) , 
  children:[
    {path:'' , redirectTo:'home' , pathMatch:'full'},
    {path:'home' , loadComponent:()=>import('./components/home/home.component').then((m)=>m.default) , title:'HOME'},
    {path:'cart' , loadComponent:()=>import('./components/cart/cart.component').then((m)=>m.CartComponent) , title:'CART'},
    {path:'products' , loadComponent:()=>import('./components/products/products.component').then((m)=>m.ProductsComponent) , title:'PRODUCTS'},
    {path:'product-details/:_id' , loadComponent:()=>import('./components/product-details/product-details.component').then((m)=>m.ProductDetailsComponent) , title:'PRODUCT DETAILS'},
    {path:'categories' , loadComponent:()=>import('./components/categories/categories.component').then((m)=>m.CategoriesComponent) , title:'CATEGORIES'},
    {path:'categoryDetails/:id' , loadComponent:()=>import('./components/category-details/category-details.component').then((m)=>m.CategoryDetailsComponent) , title:'CATEGORY DETAILS'},
    {path:'brands' , loadComponent:()=>import('./components/brands/brands.component').then((m)=>m.BrandsComponent) , title:'BRANDS'},
    {path:'brandDetails/:id' , loadComponent:()=>import('./components/brand-details/brand-details.component').then((m)=>m.BrandDetailsComponent) , title:'BRAND DETAILS'},
    {path:'payment/:id' , loadComponent:()=>import('./components/payment/payment.component').then((m)=>m.PaymentComponent) , title:'PAYMENT'},
    {path:'allorders' , loadComponent:()=>import('./components/allorders/allorders.component').then((m)=>m.AllordersComponent) , title:'AllOrders'},
    {path:'forgetpassword' , loadComponent:()=>import('./components/forget-password/forget-password.component').then((m)=>m.ForgetPasswordComponent) , title:'Forget Password'},
    {path:'wishlist' , loadComponent:()=>import('./components/wish-list/wish-list.component').then((m)=>m.WishListComponent) , title:'WISHLIST'},
  ]},
  
  //auth
  {path:'' , 
  loadComponent:()=>import('./components/auth-layout/auth-layout.component').then((m)=>m.AuthLayoutComponent) , children:[
    {path:'' , redirectTo:'login' , pathMatch:'full'},
    {path:'login' , loadComponent:()=>import('./components/login/login.component').then((m)=>m.LoginComponent) , title:'LOGIN'},
    {path:'register' , loadComponent:()=>import('./components/register/register.component').then((m)=>m.RegisterComponent) , title:'REGISTER'},
    {path:'forgetpasswordinauth' , loadComponent:()=>import('./components/forget-password/forget-password.component').then((m)=>m.ForgetPasswordComponent) , title:'Forget Password'},

  ]},

  {path:'**' , loadComponent:()=>import('./components/notfoundpage/notfoundpage.component').then((m)=>m.NotfoundpageComponent) , title:'ERROR 404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
