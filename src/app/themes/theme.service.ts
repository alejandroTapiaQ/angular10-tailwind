import { Injectable } from '@angular/core';
import { IMappedTheme, ITheme } from './utils';
import { themes } from './themes';
import { Store } from '@ngrx/store';
import { AppState } from '../store/app.state';
import { Subscription } from 'rxjs';
import { ThemeSatate } from '../store/theme';

@Injectable({
  providedIn: 'root'
})

export class ThemeService {
  private subscriptionItems: Subscription;

  constructor(
    private readonly store: Store<AppState>,
  ) {
    this.store.select('themeReducer').subscribe((state: ThemeSatate) => {
      const currentTheme = state.theme.currentTheme || null;
      if (!currentTheme) {
        this.applyTheme(state.theme.defaultTheme);
      } else {
        this.applyTheme(currentTheme);
      }
    });
  }
  public mapTheme(variables: ITheme): IMappedTheme {
    return {
      '--color-primary': variables.primary || '',
      '--color-secondary': variables.secondary || '',
      '--color-success': variables.success || '',
      '--color-info': variables.info || '',
      '--color-warning': variables.warning || '',
      '--color-danger': variables.danger || '',
      '--color-text-primary': variables.textPrimary || '',
      '--color-text-secondary': variables.textSecondary || '',
      '--color-text-success': variables.textSuccess || '',
      '--color-text-info': variables.textInfo || '',
      '--color-text-warning': variables.textWarning || '',
      '--color-text-danger': variables.textDanger || '',
      '--color-text-default': variables.defaultText || '',
      '--background-light': variables.backgroundLight || '',
      '--background-dark': variables.backgroundDark || '',
      '--background-default': variables.backgroundDefault || '',
      '--background-base': variables.backgroundBase || ''
    };
  }

  public applyTheme(theme: string): void {
    const themeObject: IMappedTheme = this.mapTheme(themes[theme]);
    if (!themeObject) return;

    const root = document.documentElement;

    Object.keys(themeObject).forEach((property) => {
      if (property === 'name') {
        return;
      }
      root.style.setProperty(property, themeObject[property]);
    });
  }
}
