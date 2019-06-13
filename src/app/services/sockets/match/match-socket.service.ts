import { Injectable } from '@angular/core';
import {Socket} from 'ngx-socket-io';
import {Subject} from 'rxjs';
import {Match} from '../../../models/match';

@Injectable({
  providedIn: 'root'
})
export class MatchSocketService {

  public startMatchEvent$: Subject<Match> = new Subject();
  public endMatchEvent$: Subject<Match> = new Subject();
  public newScoreEvent$: Subject<Match> = new Subject();
  public matchListEvent$: Subject<Match[]> = new Subject();
  public newMatchEvent$: Subject<Match> = new Subject();

  constructor(private socket: Socket) {
    this.initializeSockets();
  }

  private initializeSockets() {
    this.socket.on('new_score', (match: Match) => {
      this.newScoreEvent$.next(match);
    });
    this.socket.on('match_list', (matchList: Match[]) => {
     this.matchListEvent$.next(matchList);
    });
    this.socket.on('new_match', (match: Match) => {
      this.newMatchEvent$.next(match);
    });
    this.socket.on('start_match', (match: Match) => {
      this.startMatchEvent$.next(match);
    });
    this.socket.on('end_match', (match: Match) => {
      this.endMatchEvent$.next(match);
    });
  }

  public newScore(match: Match) {
    this.socket.emit('new_score', match);
  }

  public startMatch(match: Match) {
    this.socket.emit('start_match', match);
  }

  public endMatch(match: Match) {
    this.socket.emit('end_match', match);
  }

  public addMatch(match: Match) {
    this.socket.emit('new_match', match);
  }

  public updateMatch(match: Match) {
    this.socket.emit('update_match', match);
  }
}
