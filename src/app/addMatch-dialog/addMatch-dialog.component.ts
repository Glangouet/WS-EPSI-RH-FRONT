import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Component, Inject} from '@angular/core';
import {MatchService} from '../services/match/match.service';
import {Match} from '../models/match';


@Component({
  selector: 'app-score-dialog',
  templateUrl: 'addMatch-dialog.html',
})
export class AddMatchDialogComponent {

  constructor(
    public matchService: MatchService,
    public dialogRef: MatDialogRef<AddMatchDialogComponent>,
  @Inject(MAT_DIALOG_DATA) public match: Match
  ) {}


  onNoClick(): void {
    this.dialogRef.close();
  }
}
