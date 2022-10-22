import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './modules/auth/auth.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomepageModule } from './modules/homepage/homepage.module';
import { CivicProjectSiteModule } from './modules/civic-project-site/civic-project-site.module';
import { DigitalDocumentSiteModule } from './modules/digital-document-site/digital-document-site.module';
import { MaterialModule } from './modules/material/material.module';
import { AdminPanelModule } from './modules/admin-panel/admin-panel.module';
import {MatDialogModule} from '@angular/material/dialog';
import { PopupDialogComponent } from './popup-dialog/popup-dialog.component';
import { NotAnAdminDialogComponent } from './not-an-admin-dialog/not-an-admin-dialog.component'; 
@NgModule({
  declarations: [AppComponent, PopupDialogComponent, NotAnAdminDialogComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    HttpClientModule,
    BrowserAnimationsModule,
    HomepageModule,
    CivicProjectSiteModule,
    DigitalDocumentSiteModule,
    MaterialModule,
    AdminPanelModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
