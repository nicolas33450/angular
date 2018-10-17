import { Component, OnInit } from '@angular/core';
import { VoteService } from '../services/vote.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  stagiaires: any[];

  constructor(private voteService: VoteService) { }

  ngOnInit() {
    this.stagiaires = this.voteService.stagiaires
  }

  votePour(i){
    this.voteService.votePour(i);
  }
  voteContre(i){
    this.voteService.voteContre(i);
  }

}
