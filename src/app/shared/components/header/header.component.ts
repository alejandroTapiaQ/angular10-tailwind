import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { SetThemeAction } from 'src/app/store/theme';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor(
    private readonly store: Store<AppState>,
  ) { }

  ngOnInit(): void {
  }

  public changeTheme(theme: string): void {
    this.store.dispatch(new SetThemeAction(theme));
  }

}
