// duel.component.ts
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/user.service';

@Component({
  selector: 'app-duel',
  templateUrl: './duel.component.html',
  styleUrls: ['./duel.component.css']
})
export class DuelComponent implements OnInit {
  usernameOne: string = "";
  usernameTwo: string = "";
  apiDataOne: any;
  apiDataTwo: any;
  winner: string | null = null;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  receiveUsernameOne(valueEmitted: string) {
    this.usernameOne = valueEmitted;
  }

  receiveUsernameTwo(valueEmitted: string) {
    this.usernameTwo = valueEmitted;
  }

  onSubmit() {
    this.userService.duelUsers(this.usernameOne, this.usernameTwo)
      .then((data: any[]) => {
        this.apiDataOne = data[0];
        this.apiDataTwo = data[1];
        this.determineWinner();
      });
  }

  determineWinner() {
    const sumOne = this.calculateSum(this.apiDataOne);
    const sumTwo = this.calculateSum(this.apiDataTwo);

    if (sumOne > sumTwo) {
      this.winner = this.usernameOne;
    } else if (sumOne < sumTwo) {
      this.winner = this.usernameTwo;
    } else {
      // In case of a tie or no clear winner based on the sum
      this.winner = null;
    }
  }

  calculateSum(apiData: any): number {
    const totalStars = apiData ? apiData['total-stars'] || 0 : 0;
    const followers = apiData ? apiData['followers'] || 0 : 0;
    const perfectRepos = apiData ? apiData['perfect-repos'] || 0 : 0;

    return totalStars + followers + perfectRepos;
  }
}
