export class MatchInfo {
  public position?: number;
  public niveauCompet?: string;
  public equipe1?: string;
  public score1?: number;
  public equipe2?: string;
  public score2?: number;
  public tempsJeu?: number;

  constructor(niveauCompet: string = null,
              equipe1: string = null,
              score1: number = null,
              equipe2: string = null,
              score2: number = null,
              tempsJeu: number = null) {
     this.niveauCompet = niveauCompet;
     this.equipe1 = equipe1;
     this.score1 = score1;
     this.equipe2 = equipe2;
     this.score2 = score2;
     this.tempsJeu = tempsJeu;
  }
}
