import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.css']
})
export class PostListItemComponent implements OnInit {

  @Input() article:"";
  @Input() actif: boolean;

  plusLike(){
    this.article.likes ++;
}
  dislike(){
    this.article.likes --;
}

  constructor() { }

  ngOnInit() {
  }

}
