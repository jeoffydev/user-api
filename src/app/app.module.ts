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
import { HomepageComponent } from './homepage/homepage.component';
import { AgeValidatorDirective } from './age-validator.directive';
import { AngularEditorModule } from '@kolkov/angular-editor'; 
import {NgxPaginationModule} from 'ngx-pagination'; 
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    StoriesComponent,
    HomepageComponent,
    AgeValidatorDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HttpClientModule,
    FormsModule, 
    AngularEditorModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    JwtModule.forRoot(
      { 
        config: {
          tokenGetter : () => { 
            return (localStorage.getItem("currentUser") ? JSON.parse(localStorage.getItem("currentUser")).token : null);
          } 
        }
      }
    )
    
  ],
  exports: [ AgeValidatorDirective ],
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
