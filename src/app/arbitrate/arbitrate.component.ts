import {Component, OnInit} from '@angular/core';
import {MatchService} from '../services/match/match.service';
import {Router} from '@angular/router';
import {AuthService} from '../services/auth/auth.service';
import {MatchSocketService} from '../services/sockets/match/match-socket.service';

@Component({
  selector: 'app-arbitrate',
  templateUrl: './arbitrate.component.html',
  styleUrls: ['./arbitrate.component.scss']
})

export class ArbitrateComponent implements OnInit {

  constructor(public matchService: MatchService,
              private router: Router,
              public authService: AuthService,
              public matchSocket: MatchSocketService) {
    if (!this.matchService.matchSelected || !this.authService.isArbitrate) {
      this.router.navigate(['/']);
    }
  }

  ngOnInit() {
  }

  addPointEquip1() {
    if (this.matchService.matchSelected.team1_score) {
      this.matchService.matchSelected.team1_score++;
    } else {
      this.matchService.matchSelected.team1_score = 1;
    }
    this.matchSocket.updateMatch(this.matchService.matchSelected);
  }
  removePointEquip1() {
    if (this.matchService.matchSelected.team1_score) {
      this.matchService.matchSelected.team1_score--;
    }
    this.matchSocket.updateMatch(this.matchService.matchSelected);
  }

  addPointEquip2() {
    if (this.matchService.matchSelected.team2_score) {
      this.matchService.matchSelected.team2_score++;
    } else {
      this.matchService.matchSelected.team2_score = 1;
    }
    this.matchSocket.updateMatch(this.matchService.matchSelected);
  }
  removePointEquip2() {
    if (this.matchService.matchSelected.team2_score) {
      this.matchService.matchSelected.team2_score--;
    }
    this.matchSocket.updateMatch(this.matchService.matchSelected);
  }

  startMatch() {
    this.matchService.matchSelected.state = 'En cours';
    this.matchSocket.updateMatch(this.matchService.matchSelected);
  }

  endMatch() {
    this.matchService.matchSelected.state = 'Terminé';
    this.matchSocket.updateMatch(this.matchService.matchSelected);
  }
}
