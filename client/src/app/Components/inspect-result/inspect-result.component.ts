import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-inspect-result',
  templateUrl: './inspect-result.component.html',
  styleUrls: ['./inspect-result.component.css']
})

export class InspectResultComponent implements OnInit {

  @Input() apiData: any;

  constructor() { }

  ngOnInit(): void {
  }

}

