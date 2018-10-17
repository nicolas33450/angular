import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-biere',
  templateUrl: './biere.component.html',
  styleUrls: ['./biere.component.css']
})
export class BiereComponent implements OnInit {

  user : {};

  constructor(private httpClient: HttpClient) {

        this.httpClient.get('https://ifpa-b68e4.firebaseio.com/stagiaires.json').subscribe(data => {
          console.log(data)

          this.user = data;
        })
      }

  ngOnInit() {
  }

}
