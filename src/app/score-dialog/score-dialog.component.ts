import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Component, Inject} from '@angular/core';
import {UserConnexion} from '../models/user-connexion';
import {MatchInfo} from '../models/match-info';


@Component({
  selector: 'app-score-dialog',
  templateUrl: 'score-dialog.html',
})
export class ScoreDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<ScoreDialogComponent>,
  @Inject(MAT_DIALOG_DATA) public matchInfo: MatchInfo
  ) {}

  addPointE1(): void {
    this.matchInfo.score1 = this.matchInfo.score1 + 1;
  }

  addPointE2(): void {
    this.matchInfo.score2 = this.matchInfo.score2 + 1;
  }

  getScore() {
   return this.matchInfo.score2;
  }

}
