import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminPanelContainerComponent } from './admin-panel-container/admin-panel-container.component';
import { CivicProjectPanelComponent } from './civic-project-panel/civic-project-panel.component';
import { DigitalDocumentPanelComponent } from './digital-document-panel/digital-document-panel.component';
import { AppRoutingModule } from 'src/app/app-routing.module';



@NgModule({
  declarations: [
    AdminPanelContainerComponent,
    CivicProjectPanelComponent,
    DigitalDocumentPanelComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ]
})
export class AdminPanelModule { }
