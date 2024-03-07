import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-duel-result',
  templateUrl: './duel-result.component.html',
  styleUrls: ['./duel-result.component.css']
})
export class DuelResultComponent implements OnInit {

  @Input() duelDataWinner: any;
  @Input() duelDataLoser: any;

  constructor() { }

  ngOnInit(): void {
  }

}
