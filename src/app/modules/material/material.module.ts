import { NgModule } from '@angular/core';
import {MatGridListModule} from "@angular/material/grid-list";
import {MatButtonModule} from "@angular/material/button";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatCardModule} from "@angular/material/card";
import {MatExpansionModule} from "@angular/material/expansion";
import {MatTableModule} from "@angular/material/table";



@NgModule({
  declarations: [],
  exports:[MatGridListModule,
            MatButtonModule,
          MatFormFieldModule,
            MatInputModule,
    MatCardModule,
    MatExpansionModule,
    MatTableModule
          ]
})
export class MaterialModule { }
