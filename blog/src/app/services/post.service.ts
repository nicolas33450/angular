import { Injectable} from '@angular/core';
import { Post } from '../post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  articles = [
    new Post('Doe',"D'importants problèmes ont surgi pour les utilisateurs d'ordinateurs  ",null,10,"./src/assets/images/bg3.jpeg"),
    new Post('Doe',"D'importants problèmes ont surgi pour les utilisateurs d'ordinateurs",null,0,"./src/assets/images/jeu2.jpeg"),
    new Post('Doe','fdfjodijgidfjhgidsgfhidsf',null,5,"./src/assets/images/bg2.jpeg"),
    new Post('Doe','fdfjodijgidfjhgidsgfhidsf',null,-10,"./src/assets/images/jeu1.jpeg"),
  ]

  constructor() { }
}
