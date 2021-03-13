import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { StoriesComponent } from './stories/stories.component';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { JwtInterceptorService } from './jwt-interceptor.service';
import { AuthorizationInterceptorService } from './authorization-interceptor.service';
import {JwtModule} from '@auth0/angular-jwt';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    StoriesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HttpClientModule,
    FormsModule,
    JwtModule.forRoot(
      { 
        config: {
          tokenGetter : () => { 
            return (sessionStorage.getItem("currentUser") ? JSON.parse(sessionStorage.getItem("currentCurrent")).token : null);
          } 
        }
      }
    )
    
  ],
  providers: [
    {
      provide : HTTP_INTERCEPTORS, //Add here multiple interceptors
      useClass : JwtInterceptorService,
      multi: true
    },
    {
      provide : HTTP_INTERCEPTORS, //Add here multiple interceptors
      useClass : AuthorizationInterceptorService,
      multi: true
    }
],
  bootstrap: [AppComponent]
})
export class AppModule { }
