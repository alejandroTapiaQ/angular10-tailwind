import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { AppState } from './store/app.state';
import { SetThemeAction, ThemeSatate } from './store/theme';
import { ThemeService } from './themes/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'angular10-tailwind';
  private onDestroy$ = new Subject();
  constructor(
    private readonly store: Store<AppState>,
    private readonly themeService: ThemeService
  ) {
    // this.store.select('themeReducer')
    // .pipe(takeUntil(this.onDestroy$))
    // .subscribe((state: ThemeSatate) => {
    //   console.log(state);
    // });
  }

  ngOnInit(): void {
    // setTimeout(() => {

    //   this.store.dispatch(new SetThemeAction('light'));
    // }, 10000)
    // setTimeout(() => {

    //   this.store.dispatch(new SetThemeAction('dark'));
    // }, 20000)
    // this.themeService.applyTheme('dark');
  }

  ngOnDestroy(): void {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }
}
