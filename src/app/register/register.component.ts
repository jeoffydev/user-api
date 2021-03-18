import { RegisterService } from './../register.service';
import { RegisterViewModel } from './../register-view-model';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router'; 
import { LoginService } from '../login.service';
import { NgForm } from '@angular/forms';
import { User } from '../user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  rvm: RegisterViewModel = new RegisterViewModel(); 
  thisMessage: any;
  errorArray: any = [];
  loginError: string = "";
  userLog : User = new User();

  @ViewChild("newForm") newForm: NgForm;
  constructor(private registerService: RegisterService, private loginservice: LoginService, private router: Router) { }
  
  
  ngOnInit(): void {
    this.thisMessage = false; 
    if(this.loginservice.checkLogin() != null){ 
      this.router.navigateByUrl("/my-stories");
    }


  }

  onRegisterClick(event){ 
    return this.registerService.Register(this.rvm).subscribe(
    
      (response) => { 
        this.loginError = "";
        this.rvm.FullName =null;
        this.rvm.UserName = null;
        this.rvm.Password = null;
        this.rvm.ConfirmPassword = null;
        this.thisMessage = "Thank you. Please login now";
      },
       (error) => {
         console.log(error);

        var errorFinal = "";
        this.errorArray = [];
        
        if(error.error.error){
          errorFinal += error.error.error;
          this.errorArray.push(error.error.error);
        }
        if(error.error.FullName){
          errorFinal += error.error.FullName;
          this.errorArray.push(error.error.FullName);
        }
        if(error.error.UserName){
          errorFinal += error.error.UserName;
          this.errorArray.push(error.error.UserName);
        }
        if(error.error.Password){
          errorFinal += error.error.Password;
          this.errorArray.push(error.error.Password);
        }
        if(error.error.ConfirmPassword){
          errorFinal += error.error.ConfirmPassword;
          this.errorArray.push(error.error.ConfirmPassword);
        }
        console.log(this.errorArray);
        this.loginError = this.errorArray;
      },

    )

  }

}
