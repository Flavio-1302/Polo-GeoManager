import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MapComponent } from './map.component';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';

import { FormsModule } from '@angular/forms';

import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    MapComponent,
  ],
  imports: [
    CommonModule,
    LeafletModule,

    FormsModule,

    MatInputModule,
    MatIconModule,
    MatButtonModule
  ],

  exports:[
    MapComponent,
    CommonModule,
    LeafletModule,


  ]
})
export class MapModule { }
