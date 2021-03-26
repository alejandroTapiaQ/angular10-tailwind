import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ThemeSatate } from './theme.interfaces';

export const getResultSearchState = createFeatureSelector<ThemeSatate>('searchResultReducer');

export const getResultsSearch = createSelector(
  getResultSearchState,
  (state: ThemeSatate) => state);
