import {Team} from './team';

export class Match {

    public team_first: Team;
    public team_second: Team;
    public start_date: number;
    public end_date: number;
    public label: string;

    constructor(team_first: Team, team_second: Team, label: string, start_date: number, end_date: number) {
        this.team_first = team_first;
        this.team_second = team_second;
        this.start_date = start_date;
        this.end_date = end_date;
        this.label = label;
    }
}
