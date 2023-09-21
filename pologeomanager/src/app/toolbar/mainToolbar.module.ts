import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


import { ToolbarComponent } from './toolbar.component';

import {MatToolbarModule} from '@angular/material/toolbar';
import{MatMenuModule} from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import{MatDialogModule} from  '@angular/material/dialog';

@NgModule({
  declarations: [
    ToolbarComponent
  ],
  imports: [
    CommonModule,
    RouterModule,

    MatMenuModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule


  ],
  exports:[
    ToolbarComponent,
    MatMenuModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class ToolbarModule { }
