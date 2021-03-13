import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { StoriesComponent } from './stories/stories.component';
import { CanActivateGuardService } from './can-activate-guard.service';

const routes: Routes = [
  {path: "", component : LoginComponent, pathMatch: "full"},
  {path: "register", component : RegisterComponent},
  {path: "login", component : LoginComponent},
  {path: "my-stories", component : StoriesComponent, canActivate: [CanActivateGuardService]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
