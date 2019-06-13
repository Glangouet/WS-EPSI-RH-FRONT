import {Team} from './team';

export class Match {

  public id?: number;
  public team1_id?: number;
  public team2_id?: number;
  public team1_score?: number;
  public team2_score?: number;
  public team_first?: Team;
  public team_second?: Team;
  public start_date?: number;
  public end_date?: number;
  public label?: string;
  public state?: string;

  constructor(team_first?: Team, team_second?: Team, label?: string, start_date?: number, end_date?: number) {
    this.state = 'en attente';
    this.team_first = team_first;
    this.team_second = team_second;
    this.start_date = start_date;
    this.end_date = end_date;
    this.label = label;
    if (!team_first) {
      this.team_first = new Team();
    }
    if (!team_second) {
      this.team_second = new Team();
    }
  }
}
