import { Component, OnInit } from '@angular/core';
import { VoteService } from '../services/vote.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  stagiaires: any[];
  actif: false;

  constructor(private voteService: VoteService) { }

  ngOnInit() {
    this.stagiaires = this.voteService.getClient()
  }

  votePour(i){
    this.voteService.votePour(i);
  }
  voteContre(i){
    this.voteService.voteContre(i);
  }
  supp(i){
    this.voteService.supp(i);
  }
  getClient(){
    this.voteService.getClient();
}

}
