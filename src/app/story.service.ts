import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Story } from './story';

@Injectable({
  providedIn: 'root'
})
export class StoryService {

  thisApiUrl: any = 'http://localhost:43573';

  constructor(private httpclient: HttpClient) { }

   getAllStories() :Observable<Story[]>{
      return this.httpclient.get<Story[]>(this.thisApiUrl + "/api/stories", {responseType : "json"});
   }
}
