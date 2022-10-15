import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './modules/auth/auth.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HomepageModule} from "./modules/homepage/homepage.module";
import {CivicProjectSiteModule} from "./modules/civic-project-site/civic-project-site.module";
import { DigitalDocumentSiteModule } from './modules/digital-document-site/digital-document-site.module';

@NgModule({
  declarations: [
    AppComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    HttpClientModule,
    BrowserAnimationsModule,
    HomepageModule,
    CivicProjectSiteModule,
    DigitalDocumentSiteModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
