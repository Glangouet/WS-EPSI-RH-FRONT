import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {UserSession} from '../../models/user-session';
import {UserConnexion} from '../../models/user-connexion';
import {Router} from '@angular/router';
import {environment} from '../../../environments/environment';
import {MatSnackBar} from '@angular/material';
import {Base64} from 'js-base64';

@Injectable()
export class AuthService {

  public userSession: UserSession;
  public isConnected: boolean;

  constructor
  (
      private http: HttpClient,
      private router: Router,
      public snackBar: MatSnackBar,
  ) {
    if (localStorage.getItem('userSession')) {
      this.isConnected = true;
      this.userSession = <UserSession>JSON.parse(localStorage.getItem('userSession'));
    } else {
      this.isConnected = false;
    }
  }

  public createUserSession(userConnexion: UserConnexion, connexionResponse: object): UserSession {
    this.userSession = new UserSession(userConnexion, connexionResponse);
    localStorage.setItem('userSession', JSON.stringify(this.userSession));
    return this.userSession;
  }

  public tokenNotExpired(token): boolean {
    if (token) {
      const splitToken = token.split('.');
      const tokenDecode = Base64.decode(splitToken[1]);
      const jsonToken = JSON.parse(tokenDecode);
      const dateNow = Math.floor(Date.now() / 1000);
      if (jsonToken['exp'] > dateNow) {
        return true;
      }
    }
    return false;
  }

  public loginApi(userConnexion: UserConnexion): Observable<Object> {
    const header = new HttpHeaders();
    header.append('Content-Type', 'application/json');
    return this.http.post(
      environment.webserviceapi_login_check,
      userConnexion, {
        headers: header,
        responseType: 'json'
      }
    );
  }

  public logout(): void {
    this.userSession = null;
    localStorage.removeItem('userSession');
    this.isConnected = false;
    this.router.navigate(['/login']);
    this.snackBar.open('Logout successful!', 'Yes!', {duration: 3000});
  }

}
