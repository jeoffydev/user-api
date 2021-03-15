import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MainAppComponentService {
  showEditor : boolean;
  constructor() { 
    this.showEditor = false;
  }

   
  toggleEditor(tr){
    if(tr == true){
      this.showEditor = false;
      return false;
    }
    if(tr == false){
      this.showEditor = true;
      return true;
    }
    
  }
}
