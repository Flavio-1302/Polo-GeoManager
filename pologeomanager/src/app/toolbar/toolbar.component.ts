import { Component, EventEmitter, Output} from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { Router, NavigationEnd } from '@angular/router';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { LogInPanelComponent } from '../homepage/log-in-panel/log-in-panel.component';


@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent {
  mobile=false
  show1:boolean=true
  show2:boolean=false

  constructor(private router: Router, public dialog: MatDialog) {

  }

  ngOnInit() {

    this.show1 = true;
    this.show2 = false;

    if (window.screen.width > 360) { // 768px portrait
      this.mobile = true;
    }


    this.router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
      if (val.url.includes('/search') ||val.url.includes('/plan') || val.url.includes('/suggest')) {
          this.show1 = false;
          this.show2 = true;
        } else {
          this.show1 = false;
          this.show2 = false;
        }
      }
    });
  }



  @Output() buttonClick = new EventEmitter<void>();


  buttonEvent(){
    this.buttonClick.emit()
  }

  openLogin() {
    const MatDialogRef= this.dialog.open(LogInPanelComponent)
   }

}

