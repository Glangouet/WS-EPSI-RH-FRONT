import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Component, Inject} from '@angular/core';
import {UserConnexion} from '../models/user-connexion';

@Component({
  selector: 'app-dialog-overview-dialog',
  templateUrl: 'dialog-overview-dialog.html',
})
export class DialogOverviewDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public userConnexion: UserConnexion) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
