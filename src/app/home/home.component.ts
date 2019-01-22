import { Component, OnInit } from '@angular/core';
import {SelectionModel} from '@angular/cdk/collections';
import {MatDialog, MatTableDataSource} from '@angular/material';
import {MatchInfo} from '../models/match-info';
import {LoginDialogComponent} from '../login-dialog/login-dialog.component';
import {UserConnexion} from '../models/user-connexion';
import {AddCommand} from '@angular/cli/commands/add-impl';
import {AddDialogComponent} from '../add-dialog/add-dialog.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  public matchs: MatchInfo[] = new Array<MatchInfo>();
  displayedColumns: string[] = ['select', 'position', 'niveauCompet', 'equipe1', 'equipe2', 'score', 'tempsJeu'];
  dataSource = new MatTableDataSource<MatchInfo>(this.matchs);
  selection = new SelectionModel<MatchInfo>(true, []);

  constructor(public dialog: MatDialog) {
    this.matchs.push(new MatchInfo('Demi Finale', 'PSG', 'OM', '2-0', 77));
  }

  ngOnInit() { }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }

  addRow() {
    this.dataSource.data.push(
      new MatchInfo('Demi Finale', 'PSG', 'OM', '2-0', 77));
    this.dataSource.data = this.dataSource.data.slice();
  }

  removeRow() {
    this.selection.selected.forEach(item => {
      console.log(item);
      this.dataSource.data.splice(item.position - 1, 1);

      this.dataSource = new MatTableDataSource<MatchInfo>(this.dataSource.data);
    });
    this.selection = new SelectionModel<MatchInfo>(true, []);
    console.log(this.dataSource.data);
  }
}
