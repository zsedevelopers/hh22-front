import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowDocumentsComponent } from './show-documents/show-documents.component';
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
import { DetailsContainerComponent } from './details-container/details-container.component';
import { DetailsDriverLicenceComponent } from './details-driver-licence/details-driver-licence.component';
import { DetailsPassportComponent } from './details-passport/details-passport.component';
import { DetailsIdentityCardComponent } from './details-identity-card/details-identity-card.component';

@NgModule({
  declarations: [
    ShowDocumentsComponent,
    DetailsContainerComponent,
    DocumentContainerComponent,
    AddDocumentComponent,
    AddIdentityCardFormComponent,
    AddPassportFormComponent,
    AddDriverLicenceFormComponent,
    DetailsContainerComponent,
    DetailsDriverLicenceComponent,
    DetailsPassportComponent,
    DetailsIdentityCardComponent,
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
