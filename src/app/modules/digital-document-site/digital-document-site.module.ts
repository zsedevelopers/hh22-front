import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowDocumentsComponent } from './show-documents/show-documents.component';
import { DocumentDetailsComponent } from './document-details/document-details.component';
import { DocumentContainerComponent } from './document-container/document-container.component';
import { AppRoutingModule } from 'src/app/app-routing.module';



@NgModule({
  declarations: [
    ShowDocumentsComponent,
    DocumentDetailsComponent,
    DocumentContainerComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ]
})
export class DigitalDocumentSiteModule { }
