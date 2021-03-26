import * as ThemeActions from './theme.actions';
import { ThemeSatate } from './theme.interfaces';

export const INITIAL_THEME_STATE: ThemeSatate = {
  theme: {
    currentTheme: null,
    defaultTheme: 'base',
    themes: []
  }
};


export const themeReducer = (state: ThemeSatate = INITIAL_THEME_STATE, action: ThemeActions.ThemeActions): ThemeSatate => {
  switch (action.type) {
    case ThemeActions.SET_THEME:
      state.theme.currentTheme = action.payload;
      return {...state};
    case ThemeActions.GET_THEME:
      return state;
    default:
      return state;
  }
};

export const themeListReducer = (state: ThemeSatate = INITIAL_THEME_STATE, action: ThemeActions.ThemeActions): ThemeSatate => {
  switch (action.type) {
    case ThemeActions.SET_LIST_THEME:
      state.theme.themes = action.payload;
      return state;
    default:
      return state;
  }
};
