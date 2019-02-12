export class MatchInfo {
  public position?: number;
  public niveauCompet?: string;
  public equipe1?: string;
  public score1?: string;
  public equipe2?: string;
  public score2?: string;
  public tempsJeu?: number;

  constructor(niveauCompet: string = null,
              equipe1: string = null,
              score1: string = null,
              equipe2: string = null,
              score2: string = null,
              tempsJeu: number = null) {
     this.niveauCompet = niveauCompet;
     this.equipe1 = equipe1;
     this.score1 = score1;
     this.equipe2 = equipe2;
     this.score2 = score2;
     this.tempsJeu = tempsJeu;
  }
}
