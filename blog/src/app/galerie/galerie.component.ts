import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-galerie',
  templateUrl: './galerie.component.html',
  styleUrls: ['./galerie.component.css']
})
export class GalerieComponent implements OnInit {
  articles: any[]

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.articles = this.postService.articles;
  }

}
