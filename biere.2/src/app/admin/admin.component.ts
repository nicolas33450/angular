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
