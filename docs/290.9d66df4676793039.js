"use strict";(self.webpackChunkFreshcartEcommerce=self.webpackChunkFreshcartEcommerce||[]).push([[290],{5290:(x,m,o)=>{o.r(m),o.d(m,{CartComponent:()=>v});var _=o(6814),d=o(1120),t=o(4769),p=o(6286);function C(n,u){if(1&n){const e=t.EpF();t.TgZ(0,"div",10)(1,"div",11),t._UZ(2,"img",12),t.qZA(),t.TgZ(3,"div",13)(4,"div")(5,"h3",14),t._uU(6),t.qZA(),t.TgZ(7,"p",15),t._uU(8),t.ALo(9,"currency"),t.qZA(),t.TgZ(10,"button",16,17),t.NdJ("click",function(){const c=t.CHM(e).$implicit,s=t.MAs(11),a=t.oxw(2);return t.KtG(a.removeItem(c.product._id,s))}),t._UZ(12,"i",18),t._uU(13," Remove"),t.qZA()(),t.TgZ(14,"div")(15,"button",19,20),t.NdJ("click",function(){const c=t.CHM(e).$implicit,s=t.MAs(16),a=t.MAs(21),l=t.oxw(2);return t.KtG(l.changeCount(c.count+1,c.product._id,s,a))}),t._uU(17,"+"),t.qZA(),t.TgZ(18,"span"),t._uU(19),t.qZA(),t.TgZ(20,"button",19,21),t.NdJ("click",function(){const c=t.CHM(e).$implicit,s=t.MAs(16),a=t.MAs(21),l=t.oxw(2);return t.KtG(l.changeCount(c.count-1,c.product._id,s,a))}),t._uU(22,"-"),t.qZA()()()()}if(2&n){const e=u.$implicit;t.xp6(2),t.Q6J("src",e.product.imageCover,t.LSH)("alt",e.product.title),t.xp6(4),t.Oqu(e.product.title),t.xp6(2),t.hij("Price : ",t.xi3(9,5,e.price,"EGP "),""),t.xp6(11),t.hij(" ",e.count," ")}}const b=function(n){return["/payment",n]};function g(n,u){if(1&n){const e=t.EpF();t.TgZ(0,"section",2)(1,"div",3)(2,"h1",4),t._uU(3,"Shop Cart"),t.qZA(),t.TgZ(4,"button",5),t.NdJ("click",function(){t.CHM(e);const i=t.oxw();return t.KtG(i.clearAllCart())}),t._uU(5," Clear cart"),t.qZA()(),t.TgZ(6,"p",6),t._uU(7),t.ALo(8,"currency"),t.qZA(),t.YNc(9,C,23,8,"div",7),t.TgZ(10,"button",8),t._uU(11,"Online Payment "),t._UZ(12,"img",9),t.qZA()()}if(2&n){const e=t.oxw();t.xp6(7),t.hij("Total price : ",t.xi3(8,3,e.cartDetails.totalCartPrice,"EGP ")," "),t.xp6(2),t.Q6J("ngForOf",e.cartDetails.products),t.xp6(1),t.Q6J("routerLink",t.VKq(6,b,e.cartDetails._id))}}function h(n,u){1&n&&(t.TgZ(0,"div",22)(1,"h2"),t._uU(2,"Your cart is empty...."),t.qZA(),t._UZ(3,"img",23),t.qZA())}let v=(()=>{class n{constructor(e,r){this._CartService=e,this._Renderer2=r,this.cartDetails=null}ngOnInit(){this._CartService.getUserCart().subscribe({next:e=>{this.cartDetails=e.data}})}removeItem(e,r){this._Renderer2.setAttribute(r,"disabled","true"),this._CartService.removeCartItem(e).subscribe({next:i=>{this._Renderer2.removeAttribute(r,"disabled"),this.cartDetails=i.data,this._CartService.cartNumber.next(i.numOfCartItems)},error:i=>{this._Renderer2.removeAttribute(r,"disabled")}})}changeCount(e,r,i,c){e>=1&&(this._Renderer2.setAttribute(i,"disabled","true"),this._Renderer2.setAttribute(c,"disabled","true"),this._CartService.updateCount(e,r).subscribe({next:s=>{this.cartDetails=s.data,this._Renderer2.removeAttribute(i,"disabled"),this._Renderer2.removeAttribute(c,"disabled")},error:s=>{this._Renderer2.removeAttribute(i,"disabled"),this._Renderer2.removeAttribute(c,"disabled")}}))}clearAllCart(){this._CartService.clearCart().subscribe({next:e=>{"success"===e.message&&(this.cartDetails=null,this._CartService.cartNumber.next(0))}})}static#t=this.\u0275fac=function(r){return new(r||n)(t.Y36(p.N),t.Y36(t.Qsj))};static#e=this.\u0275cmp=t.Xpm({type:n,selectors:[["app-cart"]],standalone:!0,features:[t.jDz],decls:3,vars:2,consts:[["class","w-75 rounded mx-auto shadow bg-main-light p-3 mb-3",4,"ngIf","ngIfElse"],["msg",""],[1,"w-75","rounded","mx-auto","shadow","bg-main-light","p-3","mb-3"],[1,"d-flex","justify-content-between","align-items-center"],[1,"h2"],[1,"btn","btn-outline-danger",3,"click"],[1,"text-main"],["class","row border-bottom py-2",4,"ngFor","ngForOf"],[1,"mt-2","py-0","main-btn",3,"routerLink"],["src","./assets/images/visa-1.svg","alt","visa logo"],[1,"row","border-bottom","py-2"],[1,"col-md-1"],[1,"w-100",3,"src","alt"],[1,"col-md-11","d-flex","align-items-center","justify-content-between"],[1,"h6"],[1,"text-main","mb-0"],[1,"btn","m-0","p-0","removeBtn",3,"click"],["btnRemove",""],[1,"fas","fa-trash-can","text-main"],[1,"btn-sm","text-main","btn","border-success",3,"click"],["btn1",""],["btn2",""],[1,"w-75","mx-auto","text-center"],["src","./assets/images/preview.png","alt","empty cart",1,"w-50"]],template:function(r,i){if(1&r&&(t.YNc(0,g,13,8,"section",0),t.YNc(1,h,4,0,"ng-template",null,1,t.W1O)),2&r){const c=t.MAs(2);t.Q6J("ngIf",i.cartDetails)("ngIfElse",c)}},dependencies:[_.ez,_.sg,_.O5,_.H9,d.rH],styles:[".removeBtn[_ngcontent-%COMP%]:hover{color:red}"]})}return n})()}}]);