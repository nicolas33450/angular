import { Component } from '@angular/core';
import { Jeux } from './jeux';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'jeux-videos';
  auth = false;
  like = 0;

  games = [
    new Jeux('Mario',true,null,'Sega',0),
    new Jeux('Sonic',true,null,'Sega',6),
    new Jeux('Mario',true,null,'Sega',0),
    new Jeux('Sonic',true,null,'Sega',2),
  ]

  toutVider(){
    console.log('on vide tout');
  }


    constructor(){
      setTimeout(
        () => {
        this.auth = true;
      },5000
    );
  }
}
