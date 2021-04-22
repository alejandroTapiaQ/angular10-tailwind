import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Cat } from '../interfaces/cat-interface';

@Component({
  selector: 'app-card-view',
  templateUrl: './card-view.component.html',
  styleUrls: ['./card-view.component.scss']
})
export class CardViewComponent implements OnInit {
  @Input() public data: Cat;
  @Input() public showDetailButton: boolean = false;
  @Output() public clickedDetail: EventEmitter<Cat> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  public clickButton(): void {
    this.clickedDetail.emit(this.data);
  }
}
