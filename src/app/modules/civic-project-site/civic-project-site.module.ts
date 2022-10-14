import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CivicProjectContainerComponent } from './civic-project-container/civic-project-container.component';
import { AddCivicProjectComponent } from './add-civic-project/add-civic-project.component';
import { ShowCivicProjectsComponent } from './show-civic-projects/show-civic-projects.component';
import { MaterialModule } from '../material/material.module';
import { AppRoutingModule } from '../../app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
@NgModule({
  declarations: [
    CivicProjectContainerComponent,
    AddCivicProjectComponent,
    ShowCivicProjectsComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MatSelectModule
  ],
})
export class CivicProjectSiteModule {}
