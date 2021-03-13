import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { StoriesComponent } from './stories/stories.component';

const routes: Routes = [
  {path: "register", component : RegisterComponent},
  {path: "login", component : LoginComponent},
  {path: "my-stories", component : StoriesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
