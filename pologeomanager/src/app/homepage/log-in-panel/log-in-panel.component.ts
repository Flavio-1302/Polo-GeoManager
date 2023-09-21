import { Component } from '@angular/core';
import { FormGroup,FormControl ,Validators } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router, NavigationEnd } from '@angular/router';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';

@Component({
  selector: 'app-log-in-panel',
  templateUrl: './log-in-panel.component.html',
  styleUrls: ['./log-in-panel.component.css']
})
export class LogInPanelComponent {

  loginForm!: FormGroup;
  private http: HttpClient;
  msgError:string ="";

  constructor(http: HttpClient,private router: Router,private dialog:MatDialog, private responsive:BreakpointObserver){
    this.http = http

  }


  ngOnInit(): void {
    this.loginForm= new FormGroup({
      username:new FormControl(null, Validators.required),
      password:new FormControl(null, Validators.required)
    });


    this.responsive.observe([
      Breakpoints.TabletPortrait,
      Breakpoints.HandsetLandscape])
      .subscribe(result => {

        const breakpoints = result.breakpoints;

        if (breakpoints[Breakpoints.TabletPortrait]) {
          console.log("screens matches TabletPortrait");
        }
        else if (breakpoints[Breakpoints.HandsetLandscape]) {
          console.log("screens matches HandsetLandscape");
        }

      });
  }


onSubmit() {
  return this.http.post(
    "http://projectingschool.altervista.org/funcs/login.php"
    ,
    JSON.stringify({

    username: this.loginForm.value.username,
    password: this.loginForm.value.password,

  })).subscribe((response) => {
if (response=="ok"){
this.router.navigate(['/search'])
const MatDialogRef= this.dialog.closeAll()

}
if(response=="not_exists"){
this.msgError="Username o password errati";
} else {
this.msgError="Errore durante il login"
}
})}
}
