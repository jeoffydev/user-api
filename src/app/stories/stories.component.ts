import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { Story } from '../story';
import { StoryService } from '../story.service';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.css']
})
export class StoriesComponent implements OnInit {

  stories: Story[];

  constructor(private storyservice : StoryService, private route : Router ) { }

  ngOnInit(): void {
    this.storyservice.getAllStories().subscribe(
      (response : Story[]) => {
          console.log(response);
           this.stories = response;
      } 
    );
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

}
