import { Injectable } from '@angular/core';
import { Recette } from '../recette';
import { Router } from '@angular/router';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VoteService {

  recettes : any[];

  constructor(private router: Router, private httpClient: HttpClient) { }

  getClient(){
    this.httpClient.get('').subscribe(
      (data) => {
      console.log(Object.values(data));
      this.recettes = Object.values (data);
    })
    return this.recettes
  }

  votePour(i){
    this.recettes[i].vote ++;
  }
  voteContre(i){
    this.recettes[i].vote --;
  }
  ajoutStagiaire(obj){

    let stagiaire = new Recette(obj.nom, obj.origine);
    this.router.navigate(['user'])

    this.httpClient
    .post('', stagiaire)
    .subscribe(() =>{
        console.log('ok');
    })
  }
  supp(i){
    this.recettes.splice(i,1);
  }
}
