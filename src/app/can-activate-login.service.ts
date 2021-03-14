import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class CanActivateLoginService {

  constructor(private loginservice : LoginService, private router : Router) { }

  canActivateLogin(): boolean{
    if(this.loginservice.isAuthenticated()){
      return true;
      this.router.navigate(["my-stories"]);
    }else{
      return false;
    }
  }


}
