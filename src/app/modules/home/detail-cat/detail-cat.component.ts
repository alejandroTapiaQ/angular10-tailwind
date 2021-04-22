import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { HomeService } from '../home.service';
import { Cat } from '../interfaces/cat-interface';

@Component({
  selector: 'app-detail-cat',
  templateUrl: './detail-cat.component.html',
  styleUrls: ['./detail-cat.component.scss']
})
export class DetailCatComponent implements OnInit, OnDestroy {
  private onDestroy$ = new Subject();
  public catData: Cat;
  constructor(
    private activatedRoute: ActivatedRoute,
    private homeService: HomeService,
  ) {
    this.activatedRoute.paramMap
      .pipe(takeUntil(this.onDestroy$))
      .subscribe((params) => {
        this.getDetailCat(params.get('id'));
      });
  }

  ngOnInit(): void {
  }

  private getDetailCat(catName: string): void {
    this.homeService.getCat(catName)
      .pipe(takeUntil(this.onDestroy$))
      .subscribe((cat) => {
        // console.log(cat)
        this.catData = cat;
      }, (err) => {
        console.error(err);
      });
  }

  ngOnDestroy(): void {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }

}
