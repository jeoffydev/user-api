import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class CanActivateRegisterService {

  constructor(private loginservice : LoginService, private router  : Router) { }

  canActivate(): boolean{
    console.log("Register Can Activate");
    console.log(this.loginservice.isAuthenticated());
    if(this.loginservice.isAuthenticated()){
      this.router.navigate(["my-stories"]);
      return true;
     
    }else{
       
      return false;
    }
  }
}