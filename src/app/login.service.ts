import { LoginViewModel } from './login-view-model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpBackend, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  thisApiUrl: any = 'http://localhost:43573';
  thisUsername : string;
  private httpclient: HttpClient; 
  

  constructor(private httpbackend : HttpBackend, private router: Router) { }

  public Login(logs: LoginViewModel): Observable<any>{ 

    this.httpclient = new HttpClient(this.httpbackend);
    return this.httpclient.post<any>(this.thisApiUrl + "/api/login", logs, { responseType: "json" })
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
           
      }
     
      
      
        
    }));
  }

  public Logout(){
    this.thisUsername = null;
    sessionStorage.removeItem("currentUser");
    this.router.navigateByUrl("/login");  

  }

}
