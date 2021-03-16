
import { Injectable } from '@angular/core'; 
import { RegisterViewModel } from './register-view-model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  thisApiUrl: any = 'http://localhost:43573';

  constructor(private httpclient: HttpClient) { 
   
  }

  public Register(rvm: RegisterViewModel): Observable<any>{
    console.log(rvm);
    return this.httpclient.post<any>(this.thisApiUrl + "/api/register", rvm, { responseType: "json" })
     
  }

  
}
