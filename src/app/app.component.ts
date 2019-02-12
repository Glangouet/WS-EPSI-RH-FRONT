import { Component } from '@angular/core';
import {MatDialog, MatSnackBar} from '@angular/material';
import {LoginDialogComponent} from './login-dialog/login-dialog.component';
import {UserConnexion} from './models/user-connexion';
import {AuthService} from './services/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mspr-cloud-project-app';

  constructor(public dialog: MatDialog,
              public snackbar: MatSnackBar,
              private authService: AuthService) {
  }

  public openDialog() {
      const dialogRef = this.dialog.open(LoginDialogComponent, {
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
      // TODO connexion
      this.snackbar.open('Hello man !', 'SUPER!');
    });
  }
}
