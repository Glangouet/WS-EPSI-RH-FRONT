export class MatchInfo {
  public position: number;
  public niveauCompet: string;
  public equipe1: string;
  public equipe2: string;
  public score: string;
  public tempsJeu: number;

  constructor(niveauCompet: string, equipe1: string, equipe2: string, score: string, tempsJeu: number) {
     this.niveauCompet = niveauCompet;
     this.equipe1 = equipe1;
     this.equipe2 = equipe2;
     this.score = score;
     this.tempsJeu = tempsJeu;
  }
}
