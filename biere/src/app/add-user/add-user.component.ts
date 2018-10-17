import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { VoteService } from '../services/vote.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  constructor(private  voteService : VoteService) { }

  ngOnInit() {
  }
  onSubmit(f: NgForm) {
    console.log(f.value);
    this.voteService.ajoutStagiaire(f.value);
    f.reset();
  }
}
