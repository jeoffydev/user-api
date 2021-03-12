import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
 
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JwtInterceptorService  implements HttpInterceptor{

  constructor() { 

  }

  /*intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>
  {


  } */

}
