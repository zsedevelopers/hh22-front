import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './modules/auth/auth.component';
import { LoginComponent } from './modules/auth/pages/login/login.component';
import { RegisterComponent } from './modules/auth/pages/register/register.component';
import { ContainerComponent } from './modules/homepage/container/container.component';
import { CivicProjectContainerComponent } from './modules/civic-project-site/civic-project-container/civic-project-container.component';
import { AddCivicProjectComponent } from './modules/civic-project-site/add-civic-project/add-civic-project.component';
import { ShowCivicProjectsComponent } from './modules/civic-project-site/show-civic-projects/show-civic-projects.component';
import { DocumentContainerComponent } from './modules/digital-document-site/document-container/document-container.component';
import { ShowDocumentsComponent } from './modules/digital-document-site/show-documents/show-documents.component';
import { DocumentDetailsComponent } from './modules/digital-document-site/document-details/document-details.component';
import { AddDocumentComponent } from './modules/digital-document-site/add-document/add-document.component';
import { AddIdentityCardFormComponent } from './modules/digital-document-site/add-identity-card-form/add-identity-card-form.component';
import { AddPassportFormComponent } from './modules/digital-document-site/add-passport-form/add-passport-form.component';
const routes: Routes = [
  { path: '', component: ContainerComponent },
  {
    path: 'civicProject',
    component: CivicProjectContainerComponent,
    children: [
      { path: 'add', component: AddCivicProjectComponent },
      { path: 'show', component: ShowCivicProjectsComponent },
    ],
  },
  {
    path: 'auth',
    component: AuthComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
    ],
  },
  {
    path: 'wallet',
    component: DocumentContainerComponent,
    children: [
      { path: '', component: ShowDocumentsComponent },
      { path: 'details/:document', component: DocumentDetailsComponent },
      {
        path: 'add',
        component: AddDocumentComponent,
        children: [
          { path: 'identity-card', component: AddIdentityCardFormComponent },
          { path: 'passport', component: AddPassportFormComponent },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
