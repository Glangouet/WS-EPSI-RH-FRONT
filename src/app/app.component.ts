import {Component, OnInit} from '@angular/core';
import {MatDialog, MatSnackBar} from '@angular/material';
import {LoginDialogComponent} from './login-dialog/login-dialog.component';
import {UserConnexion} from './models/user-connexion';
import {AuthService} from './services/auth/auth.service';
import {Socket} from 'ngx-socket-io';
import {Subscription} from 'rxjs';
import {MatchSocketService} from './services/sockets/match/match-socket.service';
import {Match} from './models/match';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public newMatchSubscription: Subscription;
  public newScoreSubscription: Subscription;
  public startMatchSubscription: Subscription;
  public endMatchSubscription: Subscription;

  constructor(public dialog: MatDialog,
              public snackbar: MatSnackBar,
              public authService: AuthService,
              private matchSocket: MatchSocketService,
              private socket: Socket) {
    this.socket.connect();
  }

  ngOnInit(): void {
    this.newMatchSubscription = this.matchSocket.newMatchEvent$.subscribe((match: Match) => {
      this.snackbar.open(`Nouveau match en attente : ${match.team_first.label} contre ${match.team_second.label} !`, 'OK');
    });
    this.startMatchSubscription = this.matchSocket.startMatchEvent$.subscribe((match: Match) => {
      this.snackbar.open(`La rencontre ${match.team_first.label} contre ${match.team_second.label} commence !`, 'OK');
    });
    this.newScoreSubscription = this.matchSocket.newScoreEvent$.subscribe((match: Match) => {
      this.snackbar.open(`Le score ${match.team_first.label} contre ${match.team_second.label} évolue: ${match.team1_score ? match.team1_score : 0} : ${match.team2_score ? match.team2_score : 0}`, 'OK');
    });
    this.endMatchSubscription = this.matchSocket.endMatchEvent$.subscribe((match: Match) => {
      this.snackbar.open(`La rencontre ${match.team_first.label} contre ${match.team_second.label} se termine !`, 'OK');
    });
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
