"use strict";(self.webpackChunkFreshcartEcommerce=self.webpackChunkFreshcartEcommerce||[]).push([[937],{937:(d,r,c)=>{c.r(r),c.d(r,{CategoriesComponent:()=>m});var n=c(6814),i=c(1120),t=c(4769),l=c(1132);const g=function(o){return["/categoryDetails",o]};function _(o,a){if(1&o&&(t.TgZ(0,"div",5)(1,"div",6),t._UZ(2,"img",7),t.TgZ(3,"h3",8),t._uU(4),t.qZA()()()),2&o){const e=a.$implicit;t.Q6J("routerLink",t.VKq(5,g,e._id)),t.xp6(2),t.Q6J("src",e.image,t.LSH)("title",e.name)("alt",e.name),t.xp6(2),t.Oqu(e.name)}}function u(o,a){if(1&o&&(t.TgZ(0,"section",1)(1,"h2",2),t._uU(2,"All Categories"),t.qZA(),t.TgZ(3,"div",3),t.YNc(4,_,5,7,"div",4),t.qZA()()),2&o){const e=t.oxw();t.xp6(4),t.Q6J("ngForOf",e.categoryData)}}let m=(()=>{class o{constructor(e){this._ProductsService=e,this.categoryData=[]}ngOnInit(){this._ProductsService.getCategories().subscribe({next:e=>{this.categoryData=e.data}})}static#t=this.\u0275fac=function(s){return new(s||o)(t.Y36(l.s))};static#e=this.\u0275cmp=t.Xpm({type:o,selectors:[["app-categories"]],standalone:!0,features:[t.jDz],decls:1,vars:1,consts:[["class","py-4",4,"ngIf"],[1,"py-4"],[1,"text-center"],[1,"row","g-4","justify-content-center"],["class","col-sm-6 col-md-4 col-lg-3 col-xl-2",3,"routerLink",4,"ngFor","ngForOf"],[1,"col-sm-6","col-md-4","col-lg-3","col-xl-2",3,"routerLink"],[1,"border","border-success","shadow","p-2","cursor-pointer"],["height","270",1,"w-100",3,"src","title","alt"],[1,"text-main","text-center","h5"]],template:function(s,p){1&s&&t.YNc(0,u,5,1,"section",0),2&s&&t.Q6J("ngIf",p.categoryData.length>0)},dependencies:[n.ez,n.sg,n.O5,i.rH]})}return o})()}}]);