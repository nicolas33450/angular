import { Injectable } from '@angular/core';
import { Stagiaire } from '../stagiaire';
import { Router } from '@angular/router';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VoteService {

  stagiaires : any[];

  constructor(private router: Router, private httpClient: HttpClient) { }

  getClient(){
    this.httpClient.get('https://ifpa-b68e4.firebaseio.com/stagiaires.json').subscribe(
      (data) => {
      console.log(Object.values(data));
      this.stagiaires = Object.values (data);
    })
    return this.stagiaires
  }

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
