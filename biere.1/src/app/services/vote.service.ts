import { Injectable } from '@angular/core';
import { Stagiaire } from '../stagiaire';
import { Router } from '@angular/router';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VoteService {

  stagiaires = [
    new Stagiaire('martin','lucien',25,10),
    new Stagiaire('dupond','regis',20,42),
    new Stagiaire('durand','nico',54,33),
    new Stagiaire('tchouli','sylvio',56,3),
    new Stagiaire('azerty','toto',41,12),
    new Stagiaire('poublin','luctte',32,19),
  ]

  constructor(private router: Router, private httpClient: HttpClient) {}

  votePour(i){
    this.stagiaires[i].vote ++;
  }
  voteContre(i){
    this.stagiaires[i].vote --;
  }
  ajoutStagiaire(obj){

    let stagiaire = new Stagiaire(obj.nom, obj.prenom, obj.age, 0);
    this.router.navigate(['user'])

    this.httpClient
    .post('https://ifpa-b68e4.firebaseio.com/stagiaires.json', stagiaire)
    .subscribe(() =>{
        console.log('ok');
    })
  }
  supp(i){
    this.stagiaires.splice(i,1);
  }
}
