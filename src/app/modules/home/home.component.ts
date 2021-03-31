import { Component, OnInit, Optional } from '@angular/core';
import { HomeService } from './home.service';
import {Cat} from './interfaces/cat-interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public listCats: Cat[] = [];
  constructor(
    private homeService: HomeService
  ) { }

  ngOnInit(): void {
    this.homeService.getCats()
    .subscribe((resp: Cat[]) => {
      this.listCats = resp;
    })
  }

  public trackByData(index: number, item: Cat): string | number {
    if (!item) {
      return null;
    }
    return item.id;
  }

}
