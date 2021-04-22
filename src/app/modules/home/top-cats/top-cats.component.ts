import { Component, OnDestroy, OnInit, Optional } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { HomeService } from '../home.service';
import {Cat} from '../interfaces/cat-interface';

@Component({
  selector: 'app-top-cats',
  templateUrl: './top-cats.component.html',
  styleUrls: ['./top-cats.component.scss']
})
export class TopCatsComponent implements OnInit, OnDestroy {

  private onDestroy$ = new Subject();
  public listCats: Cat[] = [];
  constructor(
    private homeService: HomeService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.homeService.getCats()
    .pipe(takeUntil(this.onDestroy$))
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

  public showDetail(data: Cat): void {
    this.router.navigate([this.router.url, data.name]);
  }

  ngOnDestroy(): void {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }

}
