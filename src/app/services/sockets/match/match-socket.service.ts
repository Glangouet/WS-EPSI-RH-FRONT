import { Injectable } from '@angular/core';
import {Socket} from 'ngx-socket-io';
import {Subject} from 'rxjs';
import {Match} from '../../../models/match';

@Injectable({
  providedIn: 'root'
})
export class MatchSocketService {

  public newScoreEvent$: Subject<object> = new Subject();
  public matchListEvent$: Subject<Match[]> = new Subject();
  public newMatchEvent$: Subject<Match> = new Subject();

  constructor(private socket: Socket) {
    this.initializeSockets();
  }

  private initializeSockets() {
    this.socket.on('newScore', (obj: Object) => {
      this.newScoreEvent$.next(obj);
    });
    this.socket.on('match_list', (matchList: Match[]) => {
      console.log('je passe ici');
     this.matchListEvent$.next(matchList);
    });
    this.socket.on('new_match', (match: Match) => {
      this.newMatchEvent$.next(match);
    });
  }

  public addMatch(match: Match) {
    console.log(match);
    this.socket.emit('new_match', match);
  }

  public updateMatch(match: Match) {
    this.socket.emit('update_match', match);
  }
}
