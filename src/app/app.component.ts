import { MainAppComponentService } from './main-app-component.service';
import { Component } from '@angular/core';
import { LoginService } from './login.service';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'user-api'; 
  /**
   *
   */
 
  constructor(public loginservice: LoginService, private router : Router, private titles: Title, private appservices : MainAppComponentService) {
   
    this.titles.setTitle('Kiwi Kids Stories'); 
    
  }

 
}
