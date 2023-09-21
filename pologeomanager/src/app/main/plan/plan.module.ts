import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlanComponent } from './plan.component';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { MatButton, MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [PlanComponent],
  imports: [
    CommonModule,
    LeafletModule,

    FormsModule,

    MatButtonModule,  
    MatIconModule

  ],
  exports:[PlanComponent]
})
export class PlanModule { }
