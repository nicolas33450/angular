import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-biere',
  templateUrl: './biere.component.html',
  styleUrls: ['./biere.component.css']
})
export class BiereComponent implements OnInit {

  biere : {};

  constructor(private httpClient: HttpClient) {

        this.httpClient.get('https://api.punkapi.com/v2/beers').subscribe(data => {
          console.log(data)

          this.biere = data;
        })
      }

  ngOnInit() {
  }

}
