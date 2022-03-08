import { HttpErrorResponse, HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { RestDataSource } from '../core/shared/data/rest.datasource';

@Injectable({
  providedIn: 'root'
})
export class AuthenInterceptorService implements HttpInterceptor {
  public emptyToken: string = '';
  public error!: HttpErrorResponse;

  constructor(
    private dataSource: RestDataSource,
    private route: Router

  ) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
    if (this.dataSource.authToken) {
      const cloned = request.clone({
        setHeaders: { Authorization: `Bearer ${this.dataSource.authToken}` }
      });
      return next.handle(cloned);
    }
    else {
      return next.handle(request);
    }
  }
}
