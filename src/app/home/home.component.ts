import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {SelectionModel} from '@angular/cdk/collections';
import {MatDialog, MatTableDataSource} from '@angular/material';
import {MatchInfo} from '../models/match-info';
import {AddMatchDialogComponent} from '../addMatch-dialog/addMatch-dialog.component';
import {MatchService} from '../services/match/match.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  displayedColumns: string[] = ['select', 'position', 'niveauCompet', 'equipe1', 'score1', 'equipe2', 'score2', 'tempsJeu'];
  selection = new SelectionModel<MatchInfo>(true, []);

  constructor(public dialog: MatDialog, public matchService: MatchService, private router: Router) {
    matchService.matchs.push(new MatchInfo('Demi Finale', 'PSG', 2, 'OM', 0, 77));
  }

  ngOnInit() { }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.matchService.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.matchService.dataSource.data.forEach(row => this.selection.select(row));
  }

  addMatch() {
    const matchInfo = new MatchInfo();
    this.openCreateMatchDialog(matchInfo);
  }

  removeMatch() {
    this.selection.selected.forEach((item, i) => {
      console.log(item);
      this.matchService.matchs.forEach((match, n) => {
        if (match === item) {
          console.log(match, item, n);
          console.log('je passe ici');
          this.matchService.matchs.splice(n, 1);
        }
      });
      this.matchService.dataSource = new MatTableDataSource<MatchInfo>(this.matchService.matchs);
    });
    this.selection = new SelectionModel<MatchInfo>(true, []);
  }

  isDisable() {
    // TODO if droit
    const isDisable = null;
    return isDisable ;
  }

    public openCreateMatchDialog(matchInfo: MatchInfo) {
      const dialogRef = this.dialog.open(AddMatchDialogComponent, {
        width: '250px',
        data: matchInfo
      });
  }

  arbitrate() {
    this.matchService.matchSelected = this.selection.selected.pop();
    this.router.navigate(['/arbitrate']);
  }
}
