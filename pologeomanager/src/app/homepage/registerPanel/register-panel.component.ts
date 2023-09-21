import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, RequiredValidator } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import{Observable} from "rxjs";
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-register-panel',
  templateUrl: './register-panel.component.html',
  styleUrls: ['./register-panel.component.css']
})
export class RegisterPanelComponent {

  registerForm!: FormGroup;
  private http: HttpClient;
   msg: string = "";
   msgError:string =""


  constructor(http: HttpClient, private router: Router,private dialog:MatDialog) {
    this.http = http
  }

  ngOnInit(): void {
    this.registerForm = new FormGroup({

      account: new FormControl(null, Validators.required),
      username: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, Validators.required)

    })
  }

  showMsg() {
    if (this.registerForm.value.account == "admin") {
      this.msg = "L'account Admin ti permette di creare mappe per la comunità";

    } else {
      this.msg = "L'account Explorer ti permette di visualizzare le mappe create dagli admin"
    }
  }

  onSubmit() {

    return this.http.post(
                  "http://projectingschool.altervista.org/funcs/registration.php",
      JSON.stringify({
        account: this.registerForm.value.account,
        username: this.registerForm.value.username,
        password: this.registerForm.value.password,
        email: this.registerForm.value.email

      })).subscribe((response) => {
        if (response=="ok"){
          this.router.navigate(['/search'])
          const MatDialogRef= this.dialog.closeAll()

        }

         if(response="account_exists"){
          this.msgError="Account già registrato";
        }

         if(response="username_taken"){
          this.msgError="Username già preso"
        } else {
          this.msgError="Errore durante la registrazione"
        }
      })
      }
  }

