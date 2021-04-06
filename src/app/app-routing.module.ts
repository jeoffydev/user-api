import { HomepageComponent } from './homepage/homepage.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { StoriesComponent } from './stories/stories.component';
import { CanActivateGuardService } from './can-activate-guard.service';
import { CanActivateLoginService } from './can-activate-login.service';
import { CanActivateRegisterService } from './can-activate-register.service';
import { CanActivateHomeService } from './can-activate-home.service';
import { AboutUsComponent } from './about-us/about-us.component';

const routes: Routes = [
  {path: "", component : HomepageComponent  },
  {path: "register", component : RegisterComponent  },
  {path: "login", component : LoginComponent  },
  {path: "my-stories", component : StoriesComponent, canActivate: [CanActivateGuardService]},
  {path: "about-us", component : AboutUsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
