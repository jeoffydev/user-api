import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Story } from './story';

@Injectable({
  providedIn: 'root'
})
export class StoryService {

  thisApiUrl: any = 'http://localhost:43573';
 

  constructor(private httpclient: HttpClient) { }

   getAllStories() :Observable<Story[]>{
     
    /* USE INTERCEPTORS INSTEAD */
     //JWT For Angular
     /*var currentUser = {token : ""};
      var headers = new HttpHeaders();
      headers = headers.set("Authorization", "Bearer ");
      if(sessionStorage.currentUser != null){
        currentUser = JSON.parse(sessionStorage.currentUser);
        headers = headers.set("Authorization", "Bearer " + currentUser.token);
      }*/
        //JWT For Angular

      return this.httpclient.get<Story[]>(this.thisApiUrl + "/api/stories", {  responseType : "json"});
      
      
   }

   getMyStories(userid : any) :Observable<Story[]>{ 
      return this.httpclient.get<Story[]>(this.thisApiUrl + "/api/stories/" + userid, {  responseType : "json"});
   }


   writeMyStory(story: Story) : Observable<any>{
      return this.httpclient.post<any>(this.thisApiUrl + "/api/stories", story, {  responseType : "json"});
   }

   getGoogleFonts() :Observable<any>{ 
    return this.httpclient.get<any>(this.thisApiUrl + "/api/googlefonts",  {  responseType : "json"});
   }

   LoveThisStory(userid : any, storyid: number) :Observable<string>{ 
    return this.httpclient.get<string>(this.thisApiUrl + "/api/love/" + userid + "/" + storyid, {  responseType : "json"});
  }

  UnLoveThisStory(userid : any, storyid: number) :Observable<string>{ 
    return this.httpclient.get<string>(this.thisApiUrl + "/api/lovedelete/" + userid + "/" + storyid, {  responseType : "json"});
  }

}
