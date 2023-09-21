import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterPanelComponent } from './register-panel.component';

import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import{MatFormFieldModule} from '@angular/material/form-field'
import { MatButtonModule } from '@angular/material/button';
import{MatInputModule} from '@angular/material/input'
import{MatDialogModule} from  '@angular/material/dialog';
import {MatButtonToggleModule} from '@angular/material/button-toggle';


@NgModule({
  declarations: [
    RegisterPanelComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,

    MatFormFieldModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    MatButtonToggleModule

  ],

  exports:[
    RegisterPanelComponent
  ]
})
export class RegisterPanelModule { }
