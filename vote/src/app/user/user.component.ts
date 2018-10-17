import { Component, OnInit } from '@angular/core';
import { VoteService } from '../services/vote.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
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
