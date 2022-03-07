import { Component, OnInit } from '@angular/core';

import { SignUpFormGroup } from '../form-models/signup-form-model';
import { SignUpCredentials } from '../form-models/authentication.model';
import { detectOverflow } from '@popperjs/core';
import { AuthenticationService } from '../../services/authentication.service';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  public datePipe!: any;

  public formGroup = new SignUpFormGroup();
  public userSignUp!: SignUpCredentials;
  public maxDate!: Date;

  public isLoading = false;
  public formSubmitted: boolean = false;
  public error!: string | null;

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router,
    private dateFormat: DatePipe
  ) {
    this.datePipe = dateFormat
  }

  ngOnInit(): void {
    this.maxDate = new Date;
    this.maxDate.setFullYear(this.maxDate.getFullYear() - 18);

  }

  submitForm() {
    if (!this.formGroup.valid) {
      return
    }
    this.userSignUp = this.formGroup.value;
    console.log(this.userSignUp);
    this.formSubmitted = true;
    this.authenticationService.onUserSignOn(
      this.userSignUp.username,
      this.userSignUp.email,
      this.userSignUp.name,
      this.datePipe.transform(this.userSignUp.dateOfBirth,'yyyy-MM-dd'),
      this.userSignUp.password
    ).subscribe(sucess => {
      if (sucess) {
        alert('Welcome');
        this.router.navigate(['login']);
      }
    },
      error => {
        this.error = 'Registration Failed';
        alert(this.error);
        this.isLoading = false;
    })


  }

  

}
