import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './modules/auth/auth.component';
import { LoginComponent } from './modules/auth/pages/login/login.component';
import { RegisterComponent } from './modules/auth/pages/register/register.component';

import { DocumentContainerComponent } from './modules/digital-document-site/document-container/document-container.component';
import { ShowDocumentsComponent } from './modules/digital-document-site/show-documents/show-documents.component';
import { AddDocumentComponent } from './modules/digital-document-site/add-document/add-document.component';
import { AddIdentityCardFormComponent } from './modules/digital-document-site/add-identity-card-form/add-identity-card-form.component';
import { AddPassportFormComponent } from './modules/digital-document-site/add-passport-form/add-passport-form.component';
import { AddDriverLicenceFormComponent } from './modules/digital-document-site/add-driver-licence-form/add-driver-licence-form.component';
import { DetailsContainerComponent } from './modules/digital-document-site/details-container/details-container.component';
import { DetailsDriverLicenceComponent } from './modules/digital-document-site/details-driver-licence/details-driver-licence.component';
import { DetailsIdentityCardComponent } from './modules/digital-document-site/details-identity-card/details-identity-card.component';
import { DetailsPassportComponent } from './modules/digital-document-site/details-passport/details-passport.component';
import { AddCivicProjectComponent } from './modules/civic-project-site/add-civic-project/add-civic-project.component';
import { CivicProjectContainerComponent } from './modules/civic-project-site/civic-project-container/civic-project-container.component';
import { ShowCivicProjectsComponent } from './modules/civic-project-site/show-civic-projects/show-civic-projects.component';
import { MiddlebarComponent } from './modules/homepage/middlebar/middlebar.component';

import { AdminPanelContainerComponent } from './modules/admin-panel/admin-panel-container/admin-panel-container.component';
import { CivicProjectPanelComponent } from './modules/admin-panel/civic-project-panel/civic-project-panel.component';
import { DigitalDocumentPanelComponent } from './modules/admin-panel/digital-document-panel/digital-document-panel.component';
import { AddAdminPanelComponent } from './modules/admin-panel/add-admin-panel/add-admin-panel.component';
const routes: Routes = [
  { path: '', component: MiddlebarComponent },
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
      { path: 'show', component: ShowDocumentsComponent },
      {
        path: 'details',
        component: DetailsContainerComponent,
        children: [
          { path: 'driver-licence', component: DetailsDriverLicenceComponent },
          { path: 'identity-card', component: DetailsIdentityCardComponent },
          { path: 'passport', component: DetailsPassportComponent },
        ],
      },
      {
        path: 'add',
        component: AddDocumentComponent,
        children: [
          { path: 'identity-card', component: AddIdentityCardFormComponent },
          { path: 'passport', component: AddPassportFormComponent },
          { path: 'driver-licence', component: AddDriverLicenceFormComponent },
        ],
      },
    ],
  },
  {
    path: 'admin',
    component: AdminPanelContainerComponent,
    children: [
      {
        path: 'civic-projects',
        component: CivicProjectPanelComponent,
        // children: [{'details/:id', component:}],
      },
      {
        path: 'documents',
        component: DigitalDocumentPanelComponent,
        // children: [{'details/:documentNumber', component:}],
      },
      {
        path: 'add-admin',
        component: AddAdminPanelComponent,
        // children: [{'details/:documentNumber', component:}],
      },
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      onSameUrlNavigation: 'reload',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
