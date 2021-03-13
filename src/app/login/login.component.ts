 
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
  constructor(private loginservice: LoginService, private router: Router ) {  
  }

  ngOnInit(): void {
    this.thisMessage = false;
  }

  onLoginClick (event){ 
    return this.loginservice.Login(this.login).subscribe(
      (response) => {
        
        
        console.log(response);
        
         
        
      },
      (error)=> { 
         console.log(error);
      }
    )
  }

   

}
