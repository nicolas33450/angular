import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpErrorResponse} from '@angular/common/http';
import { Recette } from '../recette';
import { tap, catchError } from 'rxjs/operators';
import { throwError as observableThrowError, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecetteService {

  recettes : any[];

  constructor(private router: Router, private httpClient: HttpClient) { }

  getRecette(): Observable<Recette[]>{
    return this.httpClient
    .get<Recette[]>('https://recette-1eee0.firebaseio.com/recettes.json')
    .pipe(tap(data => data, catchError(this.errorHandler)))
  }
  errorHandler(error: HttpErrorResponse){
    return observableThrowError(error.message || "Server Error");

  }

  ajoutRecette(obj){

    let recettes = new Recette(obj.nom, obj.origine,obj.etat);
    this.router.navigate(['galerie'])

    this.httpClient
    .post('https://recette-1eee0.firebaseio.com/recettes.json', recettes)
    .subscribe(() =>{
        console.log('ok');
    })
  }

  votePour(i){
    this.recettes[i].vote ++;
  }

  supp(i){
    this.recettes.splice(i,1);
  }
}
