import { Component, OnInit } from '@angular/core';
import { Post } from '../post';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {


  articles = [
    new Post('Doe',"D'importants problèmes ont surgi pour les utilisateurs d'ordinateurs sous Windows 10 après l'installation d'une nouvelle mise à jour qui devait aider à combattre celle qui, en raison d'un problème, supprimait des documents.",null,10),
    new Post('Doe',"D'importants problèmes ont surgi pour les utilisateurs d'ordinateurs sous Windows 10 après l'installation d'une nouvelle mise à jour qui devait aider à combattre celle qui, en raison d'un problème, supprimait des documents.",null,0),
    new Post('Doe','fdfjodijgidfjhgidsgfhidsf',null,5),
    new Post('Doe','fdfjodijgidfjhgidsgfhidsf',null,-10),
  ]

  constructor() { }

  ngOnInit() {
  }

}
