import { LoginViewModel } from './login-view-model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  thisApiUrl: any = 'http://localhost:43573';

  constructor(private httpclient: HttpClient) { }

  public Login(logs: LoginViewModel): Observable<any>{ 
    return this.httpclient.post<any>(this.thisApiUrl + "/api/login", logs, { responseType: "json" })
    .pipe(map(log => {  
       return log; 
    }));
  }



}
