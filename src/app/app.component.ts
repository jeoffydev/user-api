import { User } from './user';
import { MainAppComponentService } from './main-app-component.service';
import { Component } from '@angular/core';
import { LoginService } from './login.service';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { AngularEditorConfig } from '@kolkov/angular-editor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'user-api'; 
  userLog : User = new User();
  /**
   *
   */
 
 
  constructor(public loginservice: LoginService, private router : Router, private titles: Title, private appservices : MainAppComponentService) {
   
    this.titles.setTitle('Kiwi Kids Stories'); 
    
     
  }

  ngOnInit(): void {

      

      if(this.loginservice.checkLogin() != null){ 
          var user = this.loginservice.checkLogin();  
          this.userLog.usernameLog = user.username;
          this.userLog.useridLog = user.userid;  
      }

   }
   

    //check if loggedin
  

 
}
