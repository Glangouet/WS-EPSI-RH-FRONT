export class MatchInfo {
  public position: number;
  public niveauCompet: string;
  public equipe1: string;
  public score1: string;
  public equipe2: string;
  public score2: string;
  public tempsJeu: number;

  constructor(niveauCompet: string, equipe1: string, score1: string, equipe2: string, score2: string, tempsJeu: number) {
     this.niveauCompet = niveauCompet;
     this.equipe1 = equipe1;
     this.score1 = score1;
     this.equipe2 = equipe2;
     this.score2 = score2;
     this.tempsJeu = tempsJeu;
  }
}
