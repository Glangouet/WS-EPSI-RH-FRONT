import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Component, Inject} from '@angular/core';
import {UserConnexion} from '../models/user-connexion';
import {MatchInfo} from '../models/match-info';

@Component({
  selector: 'app-add-dialog',
  templateUrl: 'add-dialog.html',
})
export class AddDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<AddDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public matchInfo: MatchInfo) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
