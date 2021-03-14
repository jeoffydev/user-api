import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service';
import { ActivatedRouteSnapshot,  RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CanActivateLoginService {

  constructor(private loginservice : LoginService, private router : Router) { }

  canActivate(router:ActivatedRouteSnapshot): boolean{
    console.log("Login Can Activate");
    console.log(this.loginservice.isAuthenticated());
    if(this.loginservice.isAuthenticated()){
 
      this.router.navigate(["my-stories"]);
      return true;
    }else{
      
      return false;
    }
  }


}
