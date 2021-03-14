import { RegisterService } from './../register.service';
import { RegisterViewModel } from './../register-view-model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  rvm: RegisterViewModel = new RegisterViewModel(); 
  thisMessage: any;
  constructor(private registerService: RegisterService,) { }
  
  
  ngOnInit(): void {
    this.thisMessage = false;
  }

  onRegisterClick(event){ 
    return this.registerService.Register(this.rvm).subscribe(
      (response) => { 
        console.log(response); 
        this.rvm.FullName =null;
        this.rvm.UserName = null;
        this.rvm.Password = null;
        this.rvm.ConfirmPassword = null;
        this.thisMessage = "Thank you. Please login now";
     },
      (error) => { console.log(error); }
    )

  }

}
