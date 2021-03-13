import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
 
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JwtInterceptorService  implements HttpInterceptor{

  constructor() { 

  }
  //Also add !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  //run - npm install @auth0/angular-jwt --save

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>
  {

    var currentUser = {token : ""}; 
    if(sessionStorage.currentUser != null){
      currentUser = JSON.parse(sessionStorage.currentUser); 
    }

    request = request.clone({
      setHeaders: {
        Authorization: "Bearer " + currentUser.token
      }
    })

    return next.handle(request);


  } 

}
