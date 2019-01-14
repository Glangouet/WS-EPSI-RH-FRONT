import {UserConnexion} from './user-connexion';

export class UserSession {

  constructor(userConnexion: UserConnexion, connexionResponse: object) {
    this.token = connexionResponse['token'];
    this.email = userConnexion.email;
  }

  public email: string;
  public token: string;
}
