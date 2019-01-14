import { Component } from '@angular/core';
import {MatDialog, MatSnackBar} from '@angular/material';
import {DialogOverviewDialogComponent} from './dialog-overview-dialog/dialog-overview-dialog.component';
import {UserConnexion} from './models/user-connexion';
import {AuthService} from './services/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mspr-cloud-project-app';

  constructor(public dialog: MatDialog, public snackbar: MatSnackBar, private authService: AuthService) {
  }

  public openDialog() {
      const dialogRef = this.dialog.open(DialogOverviewDialogComponent, {
        width: '250px',
        data: new UserConnexion()
      });

    dialogRef.afterClosed().subscribe(userConnexion => {
      console.log(userConnexion);
      this.authService.loginApi(userConnexion).subscribe(
        success => {
          console.log(success);
        }, error => {
          console.log(error);
        }
      );
      console.log('The dialog was closed');
      this.snackbar.open('Hello man !', 'SUPER!');
    });
  }
}
