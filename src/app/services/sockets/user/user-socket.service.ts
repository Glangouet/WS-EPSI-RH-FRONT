import { Injectable } from '@angular/core';
import {Socket} from 'ngx-socket-io';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserSocketService {

  public loginSuccessfulEvent$: Subject<object> = new Subject();
  public loginErrorEvent$: Subject<object> = new Subject();

  constructor(private socket: Socket) {
    this.initializeSockets();
  }

  private initializeSockets() {
    this.socket.on('loginSuccessful', (obj: object) => {
      this.loginSuccessfulEvent$.next(obj);
      console.log(obj);
    });
    this.socket.on('loginError', (obj: object) => {
      this.loginErrorEvent$.next(obj);
    });
  }
}
