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
  story: Story = new Story();
  showEditor : boolean = false;
  htmlView: any;
  errorArray: any = [];
  loginError: string = "";


  constructor(private storyservice : StoryService, private route : Router, private loginservice : LoginService ) { }

  ngOnInit(): void {
   /*  this.storyservice.getAllStories().subscribe(
      (response : Story[]) => {
          console.log(response);
           this.stories = response;
      } 
    ); */ 
    //Get my stories
    this.story.UserId = this.loginservice.thisUsernameId;
    this.getMyStoriesService(this.loginservice.thisUsernameId);
    this.showEditor = false;
    this.htmlView = null;
 
     
    //console.log(localStorage.getItem("currentUser") ? JSON.parse(localStorage.getItem("currentUser")).token : null);
  }

  toggleEditor(){
    this.showEditor = !this.showEditor;
    console.log(this.showEditor);
  }
   
  getStoriesService(){
    this.storyservice.getAllStories().subscribe(
      (response : Story[]) => {
        console.log(response);
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
        console.log(response);
          this.myStories = response;
      },
      (error) => { 
        console.log(error);
        
      }
    );
  }

  viewHtml(event){
    console.log(this.story.MyStory);
    this.htmlView = this.story.MyStory;
  }

  postMyStory(){
    //console.log(this.story);
    this.storyservice.writeMyStory(this.story).subscribe(
      (response) => {
        console.log(response);
        this.story.Title = null;
        this.story.MyStory = null;
        this.story.FontAwesome = null;
        this.story.BackgroundColour = null;
        this.htmlView = null;
        this.showEditor = false;
        this.loginError = "";
        this.getMyStoriesService(this.loginservice.thisUsernameId);
      },
      (error) => { 
        console.log(error.error.error.Title.errors[0].errorMessage);
        console.log(error.error.error);
        var errorFinal = "";
        this.errorArray = []; 

        if(error.error.error.Title.errors[0].errorMessage){ 
          this.errorArray.push(error.error.error.Title.errors[0].errorMessage);
        }
        if(error.error.error.MyStory.errors[0].errorMessage){ 
          this.errorArray.push(error.error.error.MyStory.errors[0].errorMessage);
        }
        /*  if(error.error.error.UserId.errors[0].errorMessage){ 
          this.errorArray.push(error.error.error.UserId.errors[0].errorMessage);
        } */
         
        console.log(this.errorArray);
        this.loginError = this.errorArray;
        
      }
    );
  }

}
