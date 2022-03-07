import { Injectable, } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { BehaviorSubject, Observable, Subject } from "rxjs";

import { environment } from "src/environments/environment";


@Injectable()

export class RestDataSource{

  public todaysDate = new Date();
  public httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'accept': 'application/json'


    })
  };

  constructor() {

  }
}
