import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/mergeMap';
import {environment} from '../../../environments/environment';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

/*
  public refreshUrl: string;
*/

  constructor (public auth: AuthService)  { }

  getHeader(request: HttpRequest<any>, token: string): HttpRequest<any> {
    return request.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (this.auth.userSession && this.auth.userSession.token && this.auth.tokenNotExpired(this.auth.userSession.token)) {
        return next.handle(this.getHeader(request, this.auth.userSession.token));
    } else if (request.url === environment.webserviceapi_login_check) {
         return next.handle(request);
    }
    this.auth.logout();
  }
}
