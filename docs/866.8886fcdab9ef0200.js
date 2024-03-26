"use strict";(self.webpackChunkFreshcartEcommerce=self.webpackChunkFreshcartEcommerce||[]).push([[866],{1866:(f,l,o)=>{o.r(l),o.d(l,{BlankLayoutComponent:()=>g});var c=o(6814),r=o(1120),t=o(4769),u=o(6286),d=o(8806);const v=["navBar"];let m=(()=>{class i{constructor(e,n,a,s){this._Router=e,this._CartService=n,this._Renderer2=a,this._WishListService=s,this.countNum=0,this.wishNum=0}scrollNav(){scrollY>500?(this._Renderer2.addClass(this.navElement.nativeElement,"py-3"),this._Renderer2.addClass(this.navElement.nativeElement,"px-5"),this._Renderer2.addClass(this.navElement.nativeElement,"shadow")):(this._Renderer2.removeClass(this.navElement.nativeElement,"py-3"),this._Renderer2.removeClass(this.navElement.nativeElement,"px-5"),this._Renderer2.removeClass(this.navElement.nativeElement,"shadow"))}ngOnInit(){this._CartService.cartNumber.subscribe({next:e=>{this.countNum=e}}),this._CartService.getUserCart().subscribe({next:e=>{this.countNum=e.numOfCartItems}}),this._WishListService.wishlistNumber.subscribe({next:e=>{this.wishNum=e}}),this._WishListService.getWishList().subscribe({next:e=>{this.wishNum=e.count}})}signOut(){localStorage.removeItem("eToken"),this._Router.navigate(["/login"])}static#t=this.\u0275fac=function(n){return new(n||i)(t.Y36(r.F0),t.Y36(u.N),t.Y36(t.Qsj),t.Y36(d.i))};static#e=this.\u0275cmp=t.Xpm({type:i,selectors:[["app-nav-blank"]],viewQuery:function(n,a){if(1&n&&t.Gf(v,5),2&n){let s;t.iGM(s=t.CRH())&&(a.navElement=s.first)}},hostBindings:function(n,a){1&n&&t.NdJ("scroll",function(){return a.scrollNav()},!1,t.Jf7)},standalone:!0,features:[t.jDz],decls:53,vars:2,consts:[[1,"navbar","navbar-expand-lg","navbar-light","bg-light","fixed-top"],["navBar",""],[1,"container-fluid"],["routerLink","",1,"navbar-brand","cursor-pointer"],["src","./assets/images/freshcart-logo.svg","alt","fresh cart logo"],["type","button","data-bs-toggle","collapse","data-bs-target","#collapsibleNavId","aria-controls","collapsibleNavId","aria-expanded","false","aria-label","Toggle navigation",1,"navbar-toggler","d-lg-none"],[1,"navbar-toggler-icon"],["id","collapsibleNavId",1,"collapse","navbar-collapse"],[1,"navbar-nav","me-auto","mt-2","mt-lg-0"],[1,"nav-item"],["routerLinkActive","active-link","routerLink","/home",1,"nav-link"],["routerLinkActive","active-link","routerLink","/products",1,"nav-link"],["routerLinkActive","active-link","routerLink","/categories",1,"nav-link"],["routerLinkActive","active-link","routerLink","/brands",1,"nav-link"],[1,"navbar-nav","ms-auto","mt-2","mt-lg-0","d-flex","justify-content-center","align-items-center","gap-3"],["routerLink","/wishlist",1,"nav-link","position-relative"],[1,"fa-solid","fa-heart","fa-2x","text-main"],[1,"badge","bg-danger","position-absolute","top-0","end-0"],["routerLink","/cart",1,"nav-link","position-relative"],[1,"fa","fa-shopping-cart","fa-2x","text-main"],[1,"nav-item","dropdown","main-text"],["role","button","data-bs-toggle","dropdown","aria-expanded","false",1,"nav-link","dropdown-toggle","text-main"],[1,"fa","fa-house-user"],[1,"dropdown-menu"],["role","button","routerLink","/forgetpassword"],[1,"dropdown-item"],[1,"nav-item","cursor-pointer"],[1,"fa-brands","fa-instagram"],[1,"fa-brands","fa-facebook"],[1,"fa-brands","fa-tiktok"],[1,"fa-brands","fa-twitter"],[1,"fa-brands","fa-linkedin"],[1,"fa-brands","fa-youtube"],["role","button",3,"click"]],template:function(n,a){1&n&&(t.TgZ(0,"nav",0,1)(2,"div",2)(3,"a",3),t._UZ(4,"img",4),t.qZA(),t.TgZ(5,"button",5),t._UZ(6,"span",6),t.qZA(),t.TgZ(7,"div",7)(8,"ul",8)(9,"li",9)(10,"a",10),t._uU(11,"Home"),t.qZA()(),t.TgZ(12,"li",9)(13,"a",11),t._uU(14,"Products"),t.qZA()(),t.TgZ(15,"li",9)(16,"a",12),t._uU(17,"Categories"),t.qZA()(),t.TgZ(18,"li",9)(19,"a",13),t._uU(20,"Brands"),t.qZA()()(),t.TgZ(21,"ul",14)(22,"li",9)(23,"a",15),t._UZ(24,"i",16),t.TgZ(25,"span",17),t._uU(26),t.qZA()()(),t.TgZ(27,"li",9)(28,"a",18),t._UZ(29,"i",19),t.TgZ(30,"span",17),t._uU(31),t.qZA()()(),t.TgZ(32,"li",20)(33,"a",21),t._UZ(34,"i",22),t.qZA(),t.TgZ(35,"ul",23)(36,"li",24)(37,"a",25),t._uU(38,"Forget password"),t.qZA()()()(),t.TgZ(39,"li",26),t._UZ(40,"i",27),t.qZA(),t.TgZ(41,"li",26),t._UZ(42,"i",28),t.qZA(),t.TgZ(43,"li",26),t._UZ(44,"i",29),t.qZA(),t.TgZ(45,"li",26),t._UZ(46,"i",30),t.qZA(),t.TgZ(47,"li",26),t._UZ(48,"i",31),t.qZA(),t.TgZ(49,"li",26),t._UZ(50,"i",32),t.qZA(),t.TgZ(51,"span",33),t.NdJ("click",function(){return a.signOut()}),t._uU(52,"SignOut"),t.qZA()()()()()),2&n&&(t.xp6(26),t.Oqu(a.wishNum),t.xp6(5),t.Oqu(a.countNum))},dependencies:[c.ez,r.rH,r.Od],styles:["nav[_ngcontent-%COMP%]{transition:padding 1s}"]})}return i})();var p=o(7913);let g=(()=>{class i{goToUp(){scrollTo(0,0)}static#t=this.\u0275fac=function(n){return new(n||i)};static#e=this.\u0275cmp=t.Xpm({type:i,selectors:[["app-blank-layout"]],standalone:!0,features:[t.jDz],decls:6,vars:0,consts:[[1,"container-fluid","main-section"],[1,"btnUp",3,"click"],[1,"fa-solid","fa-angle-up"]],template:function(n,a){1&n&&(t._UZ(0,"app-nav-blank"),t.TgZ(1,"div",0),t._UZ(2,"router-outlet"),t.qZA(),t._UZ(3,"app-footer"),t.TgZ(4,"button",1),t.NdJ("click",function(){return a.goToUp()}),t._UZ(5,"i",2),t.qZA())},dependencies:[c.ez,m,r.lC,p.c],styles:["[_nghost-%COMP%]{min-height:100vh;display:flex;flex-direction:column}.main-section[_ngcontent-%COMP%]{padding-top:70px}.btnUp[_ngcontent-%COMP%]{position:fixed;bottom:20px;right:10px;z-index:99;width:40px;height:40px;border-radius:10px;background-color:#0aad0a;color:#f0f3f2;border:unset;display:flex;align-items:center;justify-content:center;font-size:20px}"]})}return i})()}}]);