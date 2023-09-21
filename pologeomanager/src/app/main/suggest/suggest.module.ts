import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { SuggestComponent } from './suggest.component';




@NgModule({
  declarations: [SuggestComponent],
  imports: [
    CommonModule,

    MatButtonModule,
    MatIconModule,

    FormsModule,
    LeafletModule
  ],
  exports:[SuggestComponent]

})
export class SuggestModule { }
