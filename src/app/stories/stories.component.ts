import { Component, OnInit } from '@angular/core';
import { Story } from '../story';
import { StoryService } from '../story.service';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.css']
})
export class StoriesComponent implements OnInit {

  stories: Story[];

  constructor(private storyservice : StoryService ) { }

  ngOnInit(): void {
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
