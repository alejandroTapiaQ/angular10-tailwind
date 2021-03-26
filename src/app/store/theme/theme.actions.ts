import { Action } from '@ngrx/store';
import { ThemeSatate } from './theme.interfaces';

export const SET_THEME = '[THEME] SET_THEME';
export const SET_LIST_THEME = '[THEME] SET_LIST_THEME';
export const GET_THEME = '[THEME] GET_THEME';

export class SetThemeAction implements Action {
  readonly type = SET_THEME;
  constructor(public payload: string) { }
}

export class SetListThemeAction implements Action {
  readonly type = SET_LIST_THEME;
  constructor(public payload: string[]) { }
}

export class GetThemeAction implements Action {
  readonly type = GET_THEME;
  constructor(public payload: ThemeSatate) { }
}

export type ThemeActions =
  | SetThemeAction
  | SetListThemeAction
  | GetThemeAction;
