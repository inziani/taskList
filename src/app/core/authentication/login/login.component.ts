import { Component, OnInit } from '@angular/core';
import { LoginFormGroup } from '../form-models/login-form-model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public formGroup = new LoginFormGroup();
  public isLoading = false;
  public formSubmitted: boolean = false;
  public error!: string | null;

  constructor() { }

  ngOnInit(): void {
  }

  submitForm() {

  }

}
