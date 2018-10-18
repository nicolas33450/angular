import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RecetteService } from '../services/recette.service';

@Component({
  selector: 'app-add-recette',
  templateUrl: './add-recette.component.html',
  styleUrls: ['./add-recette.component.css']
})
export class AddRecetteComponent implements OnInit {

  constructor(private recetteService : RecetteService) { }

  ngOnInit() {
  }

  onSubmit(f: NgForm) {
    console.log(f.value);
    this.recetteService.ajoutRecette(f.value);
    f.reset();
  }

}
