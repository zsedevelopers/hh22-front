import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowDocumentsComponent } from './show-documents/show-documents.component';
import { DocumentDetailsComponent } from './document-details/document-details.component';
import { DocumentContainerComponent } from './document-container/document-container.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { AddDocumentComponent } from './add-document/add-document.component';
import { AddIdentityCardFormComponent } from './add-identity-card-form/add-identity-card-form.component';



@NgModule({
  declarations: [
    ShowDocumentsComponent,
    DocumentDetailsComponent,
    DocumentContainerComponent,
    AddDocumentComponent,
    AddIdentityCardFormComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ]
})
export class DigitalDocumentSiteModule { }
