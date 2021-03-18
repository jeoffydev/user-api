import { User } from './../user';
import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { Story } from '../story';
import { StoryService } from '../story.service';
import { LoginService } from '../login.service';
import { Editor } from 'ngx-editor';
import { toHTML } from 'ngx-editor';

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
  thisUsername : string;
  thisUsernameId : string;
  userLog : User = new User();

  //TExt editor
  editor: Editor;
  html: '';

  constructor(private storyservice : StoryService, private route : Router, private loginservice : LoginService ) { }

  ngOnInit(): void {
   /*  this.storyservice.getAllStories().subscribe(
      (response : Story[]) => {
          console.log(response);
           this.stories = response;
      } 
    ); */ 

    if(this.loginservice.checkLogin() != null){ 
      var user = this.loginservice.checkLogin();  
      this.userLog.usernameLog = user.username;
      this.userLog.useridLog = user.userid;  
    }
    

    //Get my stories
    this.story.UserId = this.userLog.useridLog;
    this.getMyStoriesService(this.userLog.useridLog);
    this.showEditor = false;
    this.htmlView = null;

    //Text editor
    this.editor = new Editor();
    
   
    
    
    //console.log(localStorage.getItem("currentUser") ? JSON.parse(localStorage.getItem("currentUser")).token : null);
  }

  ngOnDestroy(): void {
    this.editor.destroy();
  }
  
 

  toggleEditor(){
    this.showEditor = !this.showEditor;
    console.log(this.showEditor);
  }
   
  getStoriesService(){
    this.storyservice.getAllStories().subscribe(
      (response : Story[]) => {
       
        if(this.userLog.usernameLog == null){
          this.route.navigateByUrl("/login");  
        }
        //console.log(response);
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
        //console.log(response);
          this.myStories = response;
      },
      (error) => { 
        console.log(error);
        
      }
    );
  }

  viewHtml(event ){ 
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
        this.getMyStoriesService(this.userLog.useridLog);
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
