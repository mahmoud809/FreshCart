"use strict";(self.webpackChunkFreshcartEcommerce=self.webpackChunkFreshcartEcommerce||[]).push([[932],{6666:(w,g,l)=>{l.r(g),l.d(g,{LoginComponent:()=>L});var u=l(6814),r=l(95),p=l(1120),e=l(4769),_=l(9410);function d(t,a){1&t&&(e.TgZ(0,"p",16),e._uU(1,"Email is required!"),e.qZA())}function c(t,a){1&t&&(e.TgZ(0,"p",16),e._uU(1,"Invalid email format! "),e.qZA())}function f(t,a){if(1&t&&(e.TgZ(0,"div",14),e.YNc(1,d,2,0,"p",15),e.YNc(2,c,2,0,"p",15),e.qZA()),2&t){const i=e.oxw();let n,o;e.xp6(1),e.Q6J("ngIf",null==(n=i.loginForm.get("email"))?null:n.getError("required")),e.xp6(1),e.Q6J("ngIf",null==(o=i.loginForm.get("email"))?null:o.getError("email"))}}function h(t,a){1&t&&(e.TgZ(0,"p",16),e._uU(1,"Password is required!"),e.qZA())}function Z(t,a){1&t&&(e.TgZ(0,"p",16),e._uU(1,"Must be at least 6 letters! "),e.qZA())}function T(t,a){if(1&t&&(e.TgZ(0,"div",14),e.YNc(1,h,2,0,"p",15),e.YNc(2,Z,2,0,"p",15),e.qZA()),2&t){const i=e.oxw();let n,o;e.xp6(1),e.Q6J("ngIf",null==(n=i.loginForm.get("password"))?null:n.getError("required")),e.xp6(1),e.Q6J("ngIf",null==(o=i.loginForm.get("password"))?null:o.getError("pattern"))}}function v(t,a){1&t&&(e.TgZ(0,"span"),e._UZ(1,"i",17),e.qZA())}function x(t,a){if(1&t&&(e.TgZ(0,"p",18),e._uU(1),e.qZA()),2&t){const i=e.oxw();e.xp6(1),e.Oqu(i.errMsg)}}let L=(()=>{class t{constructor(i,n){this._authService=i,this._router=n,this.errMsg="",this.isLoading=!1,this.loginForm=new r.cw({email:new r.NI("",[r.kI.required,r.kI.email]),password:new r.NI("",[r.kI.required,r.kI.pattern(/^[a-zA-Z0-9_@]{6,}$/)])})}handleForm(){const i=this.loginForm.value;this.isLoading=!0,!0===this.loginForm.valid&&this._authService.login(i).subscribe({next:n=>{"success"==n.message&&(localStorage.setItem("eToken",n.token),this._authService.decodeUser(),this.isLoading=!1,this._router.navigate(["/home"]))},error:n=>{this.errMsg=n.error.message,this.isLoading=!1}})}static#e=this.\u0275fac=function(n){return new(n||t)(e.Y36(_.e),e.Y36(p.F0))};static#t=this.\u0275cmp=e.Xpm({type:t,selectors:[["app-login"]],standalone:!0,features:[e.jDz],decls:21,vars:6,consts:[[1,"w-75","mx-auto","shadow","rounded-2","my-3","bg-main-light","p-4"],[1,"my-3"],[3,"formGroup","ngSubmit"],[1,"form-item","py-2"],["for","email"],["formControlName","email","type","email","id","email","placeholder","Enter your email...",1,"form-control"],["class","alert alert-danger p-1 small w-75 mx-auto",4,"ngIf"],["for","password"],["formControlName","password","type","password","id","password","placeholder","Enter your password...",1,"form-control"],[1,"d-flex","justify-content-between"],[1,"main-btn",3,"disabled"],[4,"ngIf"],["role","button","routerLink","/forgetpasswordinauth",1,"text-muted","link-primary"],["class","alert alert-danger p-1 mb-0 text-center w-75 mx-auto",4,"ngIf"],[1,"alert","alert-danger","p-1","small","w-75","mx-auto"],["class","mb-0",4,"ngIf"],[1,"mb-0"],[1,"fas","fa-spin","fa-spinner"],[1,"alert","alert-danger","p-1","mb-0","text-center","w-75","mx-auto"]],template:function(n,o){if(1&n&&(e.TgZ(0,"section",0)(1,"h1",1),e._uU(2,"Login"),e.qZA(),e.TgZ(3,"form",2),e.NdJ("ngSubmit",function(){return o.handleForm()}),e.TgZ(4,"div",3)(5,"label",4),e._uU(6,"Email"),e.qZA(),e._UZ(7,"input",5),e.YNc(8,f,3,2,"div",6),e.qZA(),e.TgZ(9,"div",3)(10,"label",7),e._uU(11,"Password"),e.qZA(),e._UZ(12,"input",8),e.YNc(13,T,3,2,"div",6),e.qZA(),e.TgZ(14,"div",9)(15,"button",10),e._uU(16,"Login "),e.YNc(17,v,2,0,"span",11),e.qZA(),e.TgZ(18,"a",12),e._uU(19,"Forget Password"),e.qZA()()(),e.YNc(20,x,2,1,"p",13),e.qZA()),2&n){let s,m;e.xp6(3),e.Q6J("formGroup",o.loginForm),e.xp6(5),e.Q6J("ngIf",(null==(s=o.loginForm.get("email"))?null:s.errors)&&(null==(s=o.loginForm.get("email"))?null:s.touched)),e.xp6(5),e.Q6J("ngIf",(null==(m=o.loginForm.get("password"))?null:m.errors)&&(null==(m=o.loginForm.get("password"))?null:m.touched)),e.xp6(2),e.Q6J("disabled",o.loginForm.invalid),e.xp6(2),e.Q6J("ngIf",o.isLoading),e.xp6(3),e.Q6J("ngIf",o.errMsg)}},dependencies:[u.ez,u.O5,r.UX,r._Y,r.Fj,r.JJ,r.JL,r.sg,r.u,p.rH]})}return t})()}}]);