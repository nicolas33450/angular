import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {

  nom = "John";
  prenom = " Doe"
  constructor() { }

  ngOnInit() {
  }

}
