import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';
import { LoginDialogComponent } from '../../shared/dialogues/login-dialog/login-dialog.component';
import { LoginCredentials } from '../form-models/authentication.model';
import { LoginFormGroup } from '../form-models/login-form-model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public formGroup = new LoginFormGroup();
  public userLogin: LoginCredentials = new LoginCredentials("", "");
  public isLoading = false;
  public formSubmitted: boolean = false;
  public isLoginMode = true;
  public error: string = '';
  public token!: string;

  constructor(
    private authenticationService: AuthenticationService,
    private dialogue: MatDialog,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  submitForm() {
    if (!this.formGroup.valid) {
      return
    }

    Object.keys(this.formGroup.controls).forEach(c =>
      this.userLogin['password'] = this.formGroup.controls['password'].value);
    this.userLogin['email'] = this.formGroup.controls['email'].value;
    this.formSubmitted = true;
    this.authenticationService.onLogin(this.userLogin.email, this.userLogin.password)
      .subscribe(
        (success: any) => {
          if (success) {
            this.dialogue.open(LoginDialogComponent);
            this.router.navigate(['home']);
          }
        },
        error => {
          this.error = 'Login Unsuccessful! Try again';
          alert(this.error);
          this.isLoading = false;
        }
      );

    this.formGroup.reset();
    this.formSubmitted = false;



  }

}
