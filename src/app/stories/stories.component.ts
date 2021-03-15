import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { Story } from '../story';
import { StoryService } from '../story.service';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.css']
})
export class StoriesComponent implements OnInit {

  stories: Story[];
  myStories: Story[];

  constructor(private storyservice : StoryService, private route : Router, private loginservice : LoginService ) { }

  ngOnInit(): void {
   /*  this.storyservice.getAllStories().subscribe(
      (response : Story[]) => {
          console.log(response);
           this.stories = response;
      } 
    ); */ 
    //Get my stories
    this.getMyStoriesService(this.loginservice.thisUsernameId);

     
    //console.log(localStorage.getItem("currentUser") ? JSON.parse(localStorage.getItem("currentUser")).token : null);
  }
   
  getStoriesService(){
    this.storyservice.getAllStories().subscribe(
      (response : Story[]) => {
          this.stories = response;
      },
      (error) => { 
        console.log(error);
        
      }
    );
  }


  getMyStoriesService(userid : any){
    this.storyservice.getMyStories(userid).subscribe(
      (response : Story[]) => {
          this.myStories = response;
      },
      (error) => { 
        console.log(error);
        
      }
    );
  }



}
