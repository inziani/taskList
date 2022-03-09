import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { RestDataSource } from '../shared/data/rest.datasource';

import { SignUpResponse } from '../shared/interfaces/signup-response';

@Injectable({
  providedIn: 'root'
})

export class AuthenticationService{

  public httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
  public userDetails = new BehaviorSubject<any>(null);

  constructor(
    private http: HttpClient,
    private dataSource: RestDataSource

  ) { }

  onUserSignOn(
    username: string,
    email: string,
    name: string,
    dateOfBirth: Date,
    password: string
  ): Observable<any> {
    return this.http.post<SignUpResponse>(`${environment.apiUrl}/register/`, JSON.stringify({
      username,
      email,
      name,
      dateOfBirth,
      password
    }),
      this.httpOptions
    ).pipe(catchError(errorResponse => {
      let errorMessage = "An unknown error occurred";
      if (errorResponse.error || !errorResponse.error.error) {
        return throwError(errorMessage);
      }
      switch (errorResponse.error.error.message) {
        case "user with this email already exists.":
          errorMessage = 'This email exists!';
          break;
      }
      switch (errorResponse.error.error.message) {
          case "A user with that username already exists.":
            errorMessage = 'This username exists';
        }
      return throwError(errorMessage);
    }));

  };

  onLogin(email: string, password: string): Observable<any> {
    return this.dataSource.getToken(email, password);
  }

  logout() {
    // remove user from the local storage
    this.dataSource.authToken = 'null';
  }

  get authenticated() {
    return this.dataSource.authToken != null;
  }
}
