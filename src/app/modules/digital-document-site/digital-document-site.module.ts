import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowDocumentsComponent } from './show-documents/show-documents.component';
import { DocumentDetailsComponent } from './document-details/document-details.component';
import { DocumentContainerComponent } from './document-container/document-container.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { AddDocumentComponent } from './add-document/add-document.component';
import { AddIdentityCardFormComponent } from './add-identity-card-form/add-identity-card-form.component';
import { AddPassportFormComponent } from './add-passport-form/add-passport-form.component';
import { MaterialModule } from '../material/material.module';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import { AddDriverLicenceFormComponent } from './add-driver-licence-form/add-driver-licence-form.component';

@NgModule({
  declarations: [
    ShowDocumentsComponent,
    DocumentDetailsComponent,
    DocumentContainerComponent,
    AddDocumentComponent,
    AddIdentityCardFormComponent,
    AddPassportFormComponent,
    AddDriverLicenceFormComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    MaterialModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule,
  ],
})
export class DigitalDocumentSiteModule {}
