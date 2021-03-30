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
  p: number = 1; 
  searchStory: string;
  storyLoved : any[];
  constructor(private storiesservice : StoryService, private loginservice : LoginService) { }

  ngOnInit(): void {

    if(this.loginservice.checkLogin() != null){ 
      var user = this.loginservice.checkLogin();  
      this.userLog.usernameLog = user.username;
      this.userLog.useridLog = user.userid;  
    }

    this.getStoriesService();

  }

  LoveThisStory(event, userid, storyid){
    console.log(userid + "/" + storyid);
  }
  UnLoveThisStory(event, userid, storyid){
    console.log(userid + "/" + storyid);
  }

  GetAllLoved(model){
    this.storyLoved = model;
  }

  getStoriesService(){
    this.storiesservice.getAllStories().subscribe(
      (response : Story[]) => {
         //
          this.AllStories  = response;
          if (response)
          {
            console.log("WAAH");
             
            if(this.userLog.useridLog != null && this.userLog.usernameLog != null){
              for(let i = 0; i < response.length; i++){
                let loveArray = response[i]['loves'];
                //console.log(loveArray);
                for(let ii = 0; ii < loveArray.length; ii++){
                  console.log(loveArray[ii]['userId'])
                  if(loveArray[ii]['userId'] == this.userLog.useridLog){
                      response[i]['lovedDone'] = true;
                  }
                }
              }
            }
            
          }

          console.log(response);
          
      },
      (error) => { 
        console.log(error);
        
      }
    );
  }




}
