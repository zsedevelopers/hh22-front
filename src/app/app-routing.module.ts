import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './modules/auth/auth.component';
import { LoginComponent } from './modules/auth/pages/login/login.component';
import { RegisterComponent } from './modules/auth/pages/register/register.component';
import {ContainerComponent} from "./modules/homepage/container/container.component";
import {CivicProjectContainerComponent} from "./modules/civic-project-site/civic-project-container/civic-project-container.component";
import {AddCivicProjectComponent} from "./modules/civic-project-site/add-civic-project/add-civic-project.component";
import {
  ShowCivicProjectsComponent
} from "./modules/civic-project-site/show-civic-projects/show-civic-projects.component";


const routes: Routes = [{path:'',component:ContainerComponent},
  {path:'civicProject', component:CivicProjectContainerComponent, children:[
      {path: 'add', component:AddCivicProjectComponent},
      {path: 'show', component:ShowCivicProjectsComponent}
    ]},
  { path: 'auth', component: AuthComponent, children:[
    {path: 'login', component:LoginComponent},
    {path: 'register', component:RegisterComponent},
]}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
