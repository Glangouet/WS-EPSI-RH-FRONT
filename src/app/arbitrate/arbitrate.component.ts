import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material';
import {MatchService} from '../services/match/match.service';
import {MatchInfo} from '../models/match-info';

@Component({
  selector: 'app-arbitrate',
  templateUrl: './arbitrate.component.html',
  styleUrls: ['./arbitrate.component.scss']
})

export class ArbitrateComponent implements OnInit {
  constructor(public dialog: MatDialog, public matchInfo: MatchInfo) {
  }
  ngOnInit() {  }
  addPointEquip1() {
    this.matchInfo.score1 = this.matchInfo.score1 + 1;
  }
  removePointEquip1() {
    this.matchInfo.score1 = this.matchInfo.score1 - 1;
  }
  addPointEquip2() {
    this.matchInfo.score2 = this.matchInfo.score2 + 1;
  }
  removePointEquip2() {
    this.matchInfo.score2 = this.matchInfo.score2 - 1;
  }
}
