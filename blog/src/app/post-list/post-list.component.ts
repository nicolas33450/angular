import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  articles: any[];
  constructor(private postService: PostService) { }

  ngOnInit() {
    this.articles = this.postService.articles;
  }

}
