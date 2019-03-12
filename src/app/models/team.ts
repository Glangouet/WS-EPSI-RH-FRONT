export class Team {

    public id?: number;
    public label?: string;
    public players_nb?: number;
    public score?: number;

    constructor(id?: number, label?: string, players_nb?: number, score?: number) {
        this.id = id;
        this.label = label;
        this.score = score;
        this.players_nb = players_nb;
    }
}
