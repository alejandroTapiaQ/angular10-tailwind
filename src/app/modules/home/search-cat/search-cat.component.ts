import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { HomeService } from '../home.service';
import { Cat } from '../interfaces/cat-interface';

@Component({
  selector: 'app-search-cat',
  templateUrl: './search-cat.component.html',
  styleUrls: ['./search-cat.component.scss']
})
export class SearchCatComponent implements OnInit, OnDestroy {
  public searchText: string = null;
  private onDestroy$ = new Subject();
  public catData: Cat;
  constructor(
    private homeService: HomeService
  ) { }

  ngOnInit(): void {
  }

  public searchCat(): void {
    if (this.searchText) {
      this.homeService.getCat(this.searchText)
        .pipe(takeUntil(this.onDestroy$))
        .subscribe((cat) => {
          this.catData = cat;
        }, (err) => {
          console.error(err);
        });
    }
  }

  public cleanSearch(): void {
    this.searchText = null;
    this.catData = null;
  }

  ngOnDestroy(): void {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }


}
