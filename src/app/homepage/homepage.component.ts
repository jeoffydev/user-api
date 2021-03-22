import { User } from './../user';
import { StoryService } from './../story.service';
import { Component, OnInit } from '@angular/core';
import { Story } from '../story';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  AllStories : Story[];
  userLog : User = new User();

  constructor(private storiesservice : StoryService, private loginservice : LoginService) { }

  ngOnInit(): void {

    if(this.loginservice.checkLogin() != null){ 
      var user = this.loginservice.checkLogin();  
      this.userLog.usernameLog = user.username;
      this.userLog.useridLog = user.userid;  
    }

    this.getStoriesService();

  }



  getStoriesService(){
    this.storiesservice.getAllStories().subscribe(
      (response : Story[]) => {
       // console.log(response);
          this.AllStories  = response;
      },
      (error) => { 
        console.log(error);
        
      }
    );
  }




}
