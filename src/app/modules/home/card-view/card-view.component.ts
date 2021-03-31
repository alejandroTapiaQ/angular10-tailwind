import { Component, Input, OnInit } from '@angular/core';
import { Cat } from '../interfaces/cat-interface';

@Component({
  selector: 'app-card-view',
  templateUrl: './card-view.component.html',
  styleUrls: ['./card-view.component.scss']
})
export class CardViewComponent implements OnInit {
  @Input() public data: Cat;
  constructor() { }

  ngOnInit(): void {
  }

}
