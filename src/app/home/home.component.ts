import {Component, OnInit} from '@angular/core';
import {SelectionModel} from '@angular/cdk/collections';
import {MatDialog, MatTableDataSource} from '@angular/material';
import {AddMatchDialogComponent} from '../addMatch-dialog/addMatch-dialog.component';
import {MatchService} from '../services/match/match.service';
import {Router} from '@angular/router';
import {Match} from '../models/match';
import {AuthService} from '../services/auth/auth.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  displayedColumns: string[] = [
    'position',
    'niveauCompet',
    'equipe1',
    'score1',
    'equipe2',
    'score2',
    'startDate',
    'startHour',
    'state'
  ];
  selection = new SelectionModel<Match>(true, []);

  public newLogEventSubscriber: Subscription;

  constructor(public dialog: MatDialog,
              public matchService: MatchService,
              private router: Router,
              public authService: AuthService) {
    if (authService.isAdmin || authService.isArbitrate) {
      this.ableSelect();
    }
  }

  ngOnInit() {
    this.newLogEventSubscriber = this.authService.$newLogEvent.subscribe((type: string) => {
      if (type === 'login' && (!this.authService.isAdmin || !this.authService.isArbitrate)) {
        this.ableSelect();
      }
      if (type === 'logout') {
        this.disableSelect();
      }
    });
  }

  public ableSelect() {
    this.displayedColumns.unshift('select');
  }

  public disableSelect() {
    this.displayedColumns.splice(0, 1);
  }

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
    const match = new Match();
    this.openCreateMatchDialog(match);
  }

  removeMatch() {
    this.selection.selected.forEach((item) => {
      console.log(item);
      this.matchService.matchList.forEach((match, n) => {
        if (match === item) {
          console.log(match, item, n);
          console.log('je passe ici');
          this.matchService.matchList.splice(n, 1);
        }
      });
      this.matchService.dataSource = new MatTableDataSource<Match>(this.matchService.matchList);
    });
    this.selection = new SelectionModel<Match>(true, []);
  }

  isDisable() {
    // TODO if droit
    const isDisable = null;
    return isDisable ;
  }

  public openCreateMatchDialog(match: Match) {
      const dialogRef = this.dialog.open(AddMatchDialogComponent, {
        width: '250px',
        data: match
      });

    dialogRef.afterClosed().subscribe((m: Match) => {
      if (m) {
        console.log(m);

      }
    });
  }

  arbitrate() {
    this.matchService.matchSelected = this.selection.selected.pop();
    this.router.navigate(['/arbitrate']);
  }
}
