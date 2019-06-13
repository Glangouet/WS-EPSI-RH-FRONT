import {Component, OnInit} from '@angular/core';
import {MatDialog, MatSnackBar} from '@angular/material';
import {LoginDialogComponent} from './login-dialog/login-dialog.component';
import {UserConnexion} from './models/user-connexion';
import {AuthService} from './services/auth/auth.service';
import {Socket} from 'ngx-socket-io';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(public dialog: MatDialog,
              public snackbar: MatSnackBar,
              private authService: AuthService,
              private socket: Socket) {
    this.socket.connect();
  }

  ngOnInit(): void {
  }

  public openDialog() {
      const dialogRef = this.dialog.open(LoginDialogComponent, {
        width: '250px',
        data: new UserConnexion()
      });

    dialogRef.afterClosed().subscribe((userConnexion: UserConnexion) => {
      if (userConnexion) {
        console.log(userConnexion);
        if (userConnexion.email === 'arbitre@soccer.fr') {
          this.authService.isArbitrate = true;
          this.authService.$newLogEvent.next('login');
          this.snackbar.open('Bonjour monsieur l\'arbitre!', 'au top!');
        } else if (userConnexion.email === 'admin@soccer.fr') {
          this.authService.isAdmin = true;
          this.authService.$newLogEvent.next('login');
          this.snackbar.open('Bonjour monsieur l\'admin!', 'ouais je sais..');
        } else {
          this.snackbar.open('Identification failed!', 'Pas cool!!!');
        }
      }
    });
  }
}
