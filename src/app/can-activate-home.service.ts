import { Router } from '@angular/router';
import { LoginService } from './login.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CanActivateHomeService {

  constructor(private loginservice : LoginService, private router  : Router) { }

  canActivate(): boolean{
    console.log("Home Can Activate");
    console.log(this.loginservice.isAuthenticated());
    if(this.loginservice.isAuthenticated()){
      this.router.navigate(["my-stories"]);
      return true; 
    }else{ 
      this.router.navigate(["login"]);
      return false;
    }
  }
}
