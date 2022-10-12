import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MaterialModule} from "../material/material.module";
import { NavbarComponent } from './navbar/navbar.component';
import { MiddlebarComponent } from './middlebar/middlebar.component';
import { DummyTileComponent } from './dummy-tile/dummy-tile.component';
import { ContainerComponent } from './container/container.component';
import {RouterModule} from "@angular/router";



@NgModule({
  declarations: [
    NavbarComponent,
    MiddlebarComponent,
    DummyTileComponent,
    ContainerComponent,

  ],
  exports: [
    ContainerComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule
  ]
})
export class HomepageModule { }
