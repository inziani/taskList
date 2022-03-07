import { Component, OnInit } from '@angular/core';

import { SignUpFormGroup } from '../form-models/signup-form-model';
import { SignUpCredentials } from '../form-models/authentication.model';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public formGroup = new SignUpFormGroup();
  public userSignUp!: SignUpCredentials;
  public maxDate!: Date;

  public isLoading = false;
  public formSubmitted: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  submitForm() {

  }

}
