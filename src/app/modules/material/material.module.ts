import { NgModule } from '@angular/core';
import {MatGridListModule} from "@angular/material/grid-list";
import {MatButtonModule} from "@angular/material/button";



@NgModule({
  declarations: [],
  exports:[MatGridListModule,
            MatButtonModule]
})
export class MaterialModule { }
