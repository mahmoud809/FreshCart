import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormControlOptions, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';
import { Router, RouterLink } from '@angular/router';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule,RouterLink],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(private _authService:AuthService,private _router:Router){}

  errMsg:string = '';
  isLoading:boolean = false;

// Name properties as same as backend object that will be sent
loginForm:FormGroup = new FormGroup({
 
  email:new FormControl('',[Validators.required,Validators.email]),
  password:new FormControl('',[Validators.required,Validators.pattern(/^[a-zA-Z0-9_@]{6,}$/)])

});


handleForm(){
  const userData =  this.loginForm.value;
  this.isLoading = true;
  
  if(this.loginForm.valid ===true)
  {
    this._authService.login(userData).subscribe({
    
      next:(response)=>
      {
        
        if(response.message == "success")
        {
          
          localStorage.setItem('eToken' , response.token);

          this._authService.decodeUser();
          // console.log(response);
          this.isLoading = false;
          //navigate to home page by programming router _Router
          this._router.navigate(['/home']);
        }
        
      },
      error:(err)=>{
        
        this.errMsg = err.error.message;
        this.isLoading = false;
        // console.log(err);
        
      }
    })
  }
}



}
