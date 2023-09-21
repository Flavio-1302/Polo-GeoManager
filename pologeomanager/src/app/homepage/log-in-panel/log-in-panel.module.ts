import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LogInPanelComponent } from './log-in-panel.component';

import { ReactiveFormsModule } from '@angular/forms';

import{MatFormFieldModule} from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import{MatInputModule} from '@angular/material/input';
import{MatDialogModule} from  '@angular/material/dialog';



@NgModule({
  declarations: [LogInPanelComponent],
  imports: [
    CommonModule,

    ReactiveFormsModule,

    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatDialogModule
  ],

  exports:[LogInPanelComponent]
})
export class LogInPanelModule { }
