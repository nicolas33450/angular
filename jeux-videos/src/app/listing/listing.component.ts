import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent implements OnInit {

  @Input() title : string;
  @Input() console : string;
  @Input() dateSortie : number;
  @Input() editeur :string;
  @Input() stock : boolean;

  constructor() { }

  ngOnInit() {
  }

}
