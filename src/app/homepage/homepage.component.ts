import { StoryService } from './../story.service';
import { Component, OnInit } from '@angular/core';
import { Story } from '../story';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  AllStories : Story[];
  constructor(private storiesservice : StoryService) { }

  ngOnInit(): void {

    this.getStoriesService();

  }



  getStoriesService(){
    this.storiesservice.getAllStories().subscribe(
      (response : Story[]) => {
        //console.log(response);
          this.AllStories  = response;
      },
      (error) => { 
        console.log(error);
        
      }
    );
  }




}
