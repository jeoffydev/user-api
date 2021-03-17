import { LoginViewModel } from './login-view-model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpBackend, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  thisApiUrl: any = 'http://localhost:43573';
  thisUsername : string;
  thisUsernameId : string;
  private httpclient: HttpClient; 
  

  constructor(private httpbackend : HttpBackend, private router: Router, private jwthelperservice: JwtHelperService) { 

 
  }

  public Login(logs: LoginViewModel): Observable<any>{ 

    this.httpclient = new HttpClient(this.httpbackend);
    return this.httpclient.post<any>(this.thisApiUrl + "/api/login", logs)

    /*
    .pipe(map(user => {  

      if(user.id != null){
        this.thisUsername = user.userName;
        // For  Angular JWT storesession Users
        sessionStorage.currentUser = JSON.stringify(user);
        console.log(user);
        console.log("Pasok");
      }else{
        console.log("Failed");
        console.log(user);
        return user;
           
      } */

      .pipe(map(response => {
        console.log(response);
        if (response)
        {
          this.thisUsername = response.userName;
          this.thisUsernameId = response.id; 
          localStorage.currentUser = JSON.stringify(response); 
        }
        return response; 
        
    }));
  }

  public Logout(){
    this.thisUsername = null;
    localStorage.removeItem("currentUser");
    this.router.navigateByUrl("/login");  

  }

  public isAuthenticated() : boolean{
     var token = localStorage.getItem("currentUser") ? JSON.parse(localStorage.getItem("currentUser")).token : null;
   
     if(this.jwthelperservice.isTokenExpired(token)){ 
       return false;
     }else{ 
       return true;
     }

  }

}
