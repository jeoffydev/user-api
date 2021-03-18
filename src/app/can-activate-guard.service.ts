import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class CanActivateGuardService {

  constructor(private loginservice : LoginService, private router : Router) { }

 canActivate(router:ActivatedRouteSnapshot) : boolean{ 
    if(this.loginservice.isAuthenticated()){ 
      return true;
    }else{
      this.router.navigate(["login"]);
      return false;
    }
  } 
 

 


}
