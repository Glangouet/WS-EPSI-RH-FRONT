import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Component, Inject} from '@angular/core';
import {UserConnexion} from '../models/user-connexion';
import {MatchInfo} from '../models/match-info';
import {MatchService} from '../services/match/match.service';


@Component({
  selector: 'app-score-dialog',
  templateUrl: 'addMatch-dialog.html',
})
export class AddMatchDialogComponent {

  constructor(
    public matchService: MatchService,
    public dialogRef: MatDialogRef<AddMatchDialogComponent>,
  @Inject(MAT_DIALOG_DATA) public matchInfo: MatchInfo
  ) {}


  onNoClick(): void {
    this.dialogRef.close();
  }
}
