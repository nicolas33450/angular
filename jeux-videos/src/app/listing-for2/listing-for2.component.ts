import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-listing-for2',
  templateUrl: './listing-for2.component.html',
  styleUrls: ['./listing-for2.component.css']
})
export class ListingFor2Component implements OnInit {

  @Input() game:'';
  @Input() actif: boolean;


  plusLike(){
    this.game.like ++;
}
  moinsLike(){
    this.game.like --;
}
  dislike(){
    this.game.like --;
}
  supp(){
    this.actif=false;
}


  constructor() { }

  ngOnInit() {
  }

}
