import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-listing-for',
  templateUrl: './listing-for.component.html',
  styleUrls: ['./listing-for.component.css']
})
export class ListingForComponent implements OnInit {

  plusLike(){
    this.like ++;
}
  moinsLike(){
    this.like --;
}
  dislike(){
    this.like --;
}
  supp(){
    this.actif=false;
}
  @Input() title : string;
  @Input() console : string;
  @Input() dateSortie : number;
  @Input() stock :boolean;
  @Input() like :number;
  @Input() actif: boolean;

  constructor() { }

  ngOnInit() {
  }

}
