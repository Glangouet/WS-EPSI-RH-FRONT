import {Component, OnInit} from '@angular/core';
import {MatchService} from '../services/match/match.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-arbitrate',
  templateUrl: './arbitrate.component.html',
  styleUrls: ['./arbitrate.component.scss']
})

export class ArbitrateComponent implements OnInit {

  constructor(public matchService: MatchService, private router: Router) {}

  ngOnInit() {
    if (!this.matchService.matchSelected) {
      this.router.navigate(['/']);
    }
  }

  addPointEquip1() {
    this.matchService.matchSelected.score1 = this.matchService.matchSelected.score1 + 1;
  }
  removePointEquip1() {
    this.matchService.matchSelected.score1 = this.matchService.matchSelected.score1 - 1;
  }
  addPointEquip2() {
    this.matchService.matchSelected.score2 = this.matchService.matchSelected.score2 + 1;
  }
  removePointEquip2() {
    this.matchService.matchSelected.score2 = this.matchService.matchSelected.score2 - 1;
  }

  validate() {
    this.router.navigate(['/']);
  }
}
