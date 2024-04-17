import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';

interface LeaderBoardItem {
  username: string;
  firstName: string | null;
  score: number;
}

const displayAmt = 10;

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.css']
})
export class LeaderboardComponent implements OnInit {

  entries: LeaderBoardItem[] = [];
  errorMsg: string = '';

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
    this.loginService.getLeaderBoard(displayAmt).subscribe({
      next: (response: any) => {
        console.log(response)
        this.entries = response;
      },
      error: error => {
          this.errorMsg = "Error Fetching Leaderboard";
        console.log(error.message)
      }
    });
  }

}
