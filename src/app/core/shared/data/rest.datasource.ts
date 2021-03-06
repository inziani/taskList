import { Injectable, } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Router } from "@angular/router";

import { BehaviorSubject, Observable, Subject } from "rxjs";
import { map, shareReplay, tap } from "rxjs/operators";

import jwtDecode, { JwtPayload } from 'jwt-decode';

import { environment } from "src/environments/environment";

import { TasksInterface } from "../interfaces/task-interface";
import { RandomQuote } from "../interfaces/rendom-quote-interface";
import { Tasks } from "../models/task-model";







@Injectable()

export class RestDataSource{
  public authToken!: string;
  public payload: any;
  public userId!: number;
  public user = new BehaviorSubject<any>(null);

  public todaysDate = new Date();
  public httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'accept': 'application/json'


    })
  };

  public taskListing!: TasksInterface[];
  public httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(
    private http: HttpClient,
    private router: Router
  ) {

  }

  getToken(email: string, password: string): Observable<any> {
    return this.http.post<any>(`${environment.apiUrl}/api/token/`, JSON.stringify({ email, password }), this.httpOptions).pipe(
      map((response: any) => {
        this.authToken = response.access;
        console.log(this.authToken);
        return this.authToken;
      },
      ),
      tap(respData => {
        this.storeUser(respData)
      }), shareReplay());
  }

  private storeUser(token: any) {
    type customJwtPayLoad = JwtPayload & { userPayloadData: string }
    let decodedToken = jwtDecode<customJwtPayLoad>(token);
    this.payload = JSON.stringify(decodedToken);
    let finaldecodedToken = JSON.parse(this.payload);
    this.userId = finaldecodedToken.user_id;
    this.user.next(this.userId);
    localStorage.setItem('userData', this.payload);
    return this.payload;
  }

   removeToken() {
    this.user.next(null);
    this.router.navigate(['/login'])

  }

  jwtPayloadData(token: any) {
    type customJwtPayLoad = JwtPayload & { userPayloadData: string }
    let decodedToken = jwtDecode<customJwtPayLoad>(token);
    this.payload = JSON.stringify(decodedToken);
    let finaldecodedToken = JSON.parse(this.payload);
    this.userId = finaldecodedToken.user_id;
    this.user.next(this.userId);
    console.log(this.user);
    return this.payload;
  }

  fetchRandomQuotes() {
    return this.http.get<RandomQuote>(`${environment.randomQuotesURL}`, this.httpOptions,);
  }

  fetchUsers(): Observable<any> {
    return this.http.get(`${environment.apiUrl}/register/`, this.httpOptions);
  }

  fetchTasks(): Observable<TasksInterface[]>{
    return this.http.get<TasksInterface[]>(`${environment.apiUrl}/tasks/`, this.httpOptions);
  }

  addTask(title: string, description: string) {
    return this.http.post<Tasks>(`${environment.apiUrl}/tasks/`, JSON.stringify({
      title, description
    }), this.httpOptions);
  }


  fetchSingleTask(id: number): Observable<TasksInterface> {
    return this.http.get<any>(`${environment.apiUrl}/tasks/` + id + '/', { headers: this.httpHeaders });
  }

  editTask(id: number, title: string, description: string ): Observable<TasksInterface> {
    return this.http.patch<any>(`${environment.apiUrl}/tasks/` + id + '/', {title, description },
      { headers: this.httpHeaders });
  }

  deleteTask(id: number): Observable<TasksInterface> {
    return this.http.delete<any>(`${environment.apiUrl}/tasks/` + id + '/');
  }





}
