import { Component, OnInit } from '@angular/core';
import { RecetteService } from '../services/recette.service';

@Component({
  selector: 'app-galerie',
  templateUrl: './galerie.component.html',
  styleUrls: ['./galerie.component.css']
})
export class GalerieComponent implements OnInit {

  recettes: any[];
  errorMsg: '';


  constructor(private recetteService: RecetteService) { }

  ngOnInit() {
    this.recetteService.getRecette()
    .subscribe(data => this.recettes = Object.values(data),
              error => this.errorMsg = error);
  }

  votePour(i){
    this.recetteService.votePour(i);
  }

  supp(i){
    this.recetteService.supp(i);
  }
  getRecette(){
    this.recetteService.getRecette();
}

}
