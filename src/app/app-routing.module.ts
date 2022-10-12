import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './modules/auth/auth.component';
import { LoginComponent } from './modules/auth/pages/login/login.component';
import { RegisterComponent } from './modules/auth/pages/register/register.component';
import {ContainerComponent} from "./modules/homepage/container/container.component";
const routes: Routes = [{path:'',component:ContainerComponent},
  { path: 'auth', component: AuthComponent, children:[
    {path: 'login', component:LoginComponent},
    {path: 'register', component:RegisterComponent},
]}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
