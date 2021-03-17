import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MainAppComponentService {
  showEditor : boolean;
  thisApiUrl: any = 'http://localhost:43573';

  constructor(private router:Router, private httpclient: HttpClient) { 
    this.showEditor = false;
  }


  getAuthenticatePages(): Observable<boolean>{
    var userName = localStorage.getItem("currentUser") ? JSON.parse(localStorage.getItem("currentUser")).userName : null;
    console.log(userName);
    return this.httpclient.get<boolean>(this.thisApiUrl + "/api/checkusername/" + userName );
  }
  
 
   
  toggleEditor(tr){
    if(tr == true){
      this.showEditor = false;
      return false;
    }
    if(tr == false){
      this.showEditor = true;
      return true;
    }
    
  }
}
