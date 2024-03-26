import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ForgetPassService } from 'src/app/core/services/forget-pass.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forget-password',
  standalone: true,
  imports: [CommonModule , ReactiveFormsModule],
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent {
constructor(private _ForgetPassService:ForgetPassService , private _Router:Router){}

step1:boolean = true;
step2:boolean = false;
step3:boolean = false;

email:string = '';
msg:string = '' ;

// Name properties as same as backend object that will be sent
forgetForm:FormGroup = new FormGroup({
 
  email:new FormControl('',[Validators.required,Validators.email]),
 

});

resetCodeForm:FormGroup = new FormGroup({
 
  resetCode:new FormControl(''),
  

});

resetPasswordForm:FormGroup = new FormGroup({
 
  newPassword:new FormControl('',[Validators.required,Validators.pattern(/^[a-zA-Z0-9_@]{6,}$/)])

});




forgetPassword():void{
  let userEmail = this.forgetForm.value;
  this.email = userEmail.email;

  this._ForgetPassService.forgetPass(userEmail).subscribe({
    next:(response)=>{

      // console.log(response);
      this.msg = response.message ;
      this.step1 = false;
      this.step2 = true;
      
    },
    error:(err)=>{
      this.msg = err.error.message;
      
    }
  });
  
}

resetCode():void{
  let resetCodeInfo = this.resetCodeForm.value;
 
  
  this._ForgetPassService.resetCodeFromApi(resetCodeInfo).subscribe({
    next:(response)=>{

      console.log(response);
      this.msg = response.status ;
      this.step2 = false;
      this.step3 = true;
      
    },
    error:(err)=>{
      this.msg = err.error.message;
      
    }
    
  })
}

newPassword():void{
                               //here we catch pass only not email so we will attach email to it.
  let resetPasswordDetails  = this.resetPasswordForm.value; 

  resetPasswordDetails.email = this.email; // became our object contains {email , newPassword}

  this._ForgetPassService.resetPassword(resetPasswordDetails).subscribe({
    next:(response)=>{
      if(response?.token){


          localStorage.setItem('eToken' , response.token);
          this._Router.navigate(['/home']);

      }

    },
    error:(err)=>{
      this.msg = err.error.message;
      
    }
  })
  
}

}
