import { ActionReducerMap } from '@ngrx/store';
import { AppState } from './app.state'
import { themeReducer, themeListReducer } from './theme/theme.reducers';
export const AppReducers: ActionReducerMap<AppState> = {
  themeReducer,
  themeListReducer
}