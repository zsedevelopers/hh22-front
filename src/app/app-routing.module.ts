import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './modules/auth.component';
import { LoginComponent } from './modules/auth/pages/login/login.component';
import { RegisterComponent } from './modules/auth/pages/register/register.component';
const routes: Routes = [{ path: 'auth', component: AuthComponent, children:[
  {path: 'login', component:LoginComponent},
  {path: 'register', component:RegisterComponent},
]}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
