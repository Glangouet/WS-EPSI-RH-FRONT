import { Injectable } from '@angular/core';
import {MatchInfo} from '../../models/match-info';
import {MatTableDataSource} from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class MatchService {

  public matchSelected: MatchInfo;
  public matchs: MatchInfo[] = new Array<MatchInfo>();
  public dataSource = new MatTableDataSource<MatchInfo>(this.matchs);

  constructor() { }

  public onClickAddMatch(matchInfo: MatchInfo) {
    this.matchs.push(matchInfo);
    this.dataSource.data = this.matchs;
  }
}
