import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Component, Inject} from '@angular/core';
import {UserConnexion} from '../models/user-connexion';
import {UserSocketService} from '../services/sockets/user/user-socket.service';

@Component({
  selector: 'app-login-dialog',
  templateUrl: 'login-dialog.html',
})
export class LoginDialogComponent {

  constructor(
    public userSocket: UserSocketService,
    public dialogRef: MatDialogRef<LoginDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public userConnexion: UserConnexion) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
