import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { RegisterPanelComponent } from '../registerPanel/register-panel.component';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

constructor(public dialog:MatDialog){}

  openRegister() {
    const MatDialogRef= this.dialog.open(RegisterPanelComponent)
   }

}
