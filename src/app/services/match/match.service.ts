import { Injectable } from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import {Match} from '../../models/match';
import {MatchSocketService} from '../sockets/match/match-socket.service';

@Injectable({
  providedIn: 'root'
})
export class MatchService {

  public matchList: Match[] = [];
  public matchSelected: Match;
  public dataSource = new MatTableDataSource<Match>(this.matchList);

  constructor(public matchSocket: MatchSocketService) {
    matchSocket.matchListEvent$.subscribe(matchList => {
      this.matchList = matchList;
      this.updateDataSource();
      console.log(this.matchList);
    });
  }

  public updateDataSource() {
    this.dataSource = new MatTableDataSource<Match>(this.matchList);
  }

  public onClickAddMatch(match: Match) {
    this.matchSocket.addMatch(match);
   // this.matchs.push(matchInfo);
   // this.dataSource.data = this.matchs;
  }
}
