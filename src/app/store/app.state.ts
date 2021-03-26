import { ActionReducer, createReducer } from '@ngrx/store';
import { ThemeSatate } from './theme';

export interface AppState {
  themeReducer: ThemeSatate;
  themeListReducer: ThemeSatate;
}
