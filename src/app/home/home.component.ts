import { Component, OnInit } from '@angular/core';
import {SelectionModel} from '@angular/cdk/collections';
import {MatTableDataSource} from '@angular/material';

export interface MatchInfo {
  niveauCompet: string;
  equipe1: string;
  equipe2: string;
  score: string;
  tempsJeu: string;
}

const ELEMENT_DATA: MatchInfo[] = [
  {niveauCompet: 'Demi Finale', equipe1: 'PSG', equipe2: 'OM', score: '2-0', tempsJeu: '77min'},
];

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  displayedColumns: string[] = ['select', 'niveauCompet', 'equipe1', 'equipe2', 'score', 'tempsJeu'];
  dataSource = new MatTableDataSource<MatchInfo>(ELEMENT_DATA);
  selection = new SelectionModel<MatchInfo>(true, []);

  constructor() { }

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
}
