import { Component, OnInit } from '@angular/core';
import { VoteService } from '../services/vote.service';

@Component({
  selector: 'app-biere',
  templateUrl: './biere.component.html',
  styleUrls: ['./biere.component.css']
})
export class BiereComponent implements OnInit {

  stagiaires: any[];

  constructor(private voteService: VoteService) { }

  ngOnInit() {
    this.stagiaires = this.voteService.getClient()
  }
  getClient(){
      this.voteService.getClient();
  }

}
