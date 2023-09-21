import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register.component';
import { MatButtonModule } from '@angular/material/button';
import{MatDialogModule} from '@angular/material/dialog';
import { AppRoutingModule } from 'src/app/app-routing.module';
@NgModule({
  declarations: [
    RegisterComponent
  ],

  imports: [
    CommonModule,
    MatButtonModule,
    MatDialogModule,
    AppRoutingModule
  ],

  exports:[
    RegisterComponent
  ]
})
export class RegisterModule { }
