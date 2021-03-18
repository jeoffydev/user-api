import { User } from './../user';
 
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginViewModel } from '../login-view-model';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login : LoginViewModel = new LoginViewModel();
  thisMessage: any;
  loginError: string = "";
  errorArray: any = [];
  userLog : User = new User();

  constructor(private loginservice: LoginService, private router: Router ) {  
  }

  ngOnInit(): void {
    this.thisMessage = false;
    
    if(this.loginservice.checkLogin() != null){ 
      this.router.navigateByUrl("/my-stories");
    }

  }



  onLoginClick (event){ 
    return this.loginservice.Login(this.login).subscribe(
      (response) => { 
        //this.router.navigateByUrl("/my-stories");
        window.location.reload();

        console.log(response);  
      },
       (error) => {
         console.log(error);

        var errorFinal = "";
        this.errorArray = [];
        
        if(error.error.error){
          errorFinal += error.error.error;
          this.errorArray.push(error.error.error);
        }
        if(error.error.UserName){
          errorFinal += error.error.UserName;
          this.errorArray.push(error.error.UserName);
        }
        if(error.error.Password){
          errorFinal += error.error.Password;
          this.errorArray.push(error.error.Password);
        }
        console.log(this.errorArray);
        this.loginError = this.errorArray;
      },
    )
  }

   

}
