import * as ThemeActions from './theme.actions';
import { ThemeSatate } from './theme.interfaces';

export const INITIAL_THEME_STATE: ThemeSatate = {
  theme: {
    currentTheme: localStorage.getItem('theme.current') || 'base',
    defaultTheme: 'base',
    themes: JSON.parse(localStorage.getItem('theme.list')) || []
  }
};


export const themeReducer = (state: ThemeSatate = INITIAL_THEME_STATE, action: ThemeActions.ThemeActions): ThemeSatate => {
  switch (action.type) {
    case ThemeActions.SET_THEME:
      state.theme.currentTheme = action.payload;
      localStorage.setItem('theme.current', state.theme.currentTheme);
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
      localStorage.setItem('theme.list', JSON.stringify(state.theme.themes));
      return {...state};
    default:
      return state;
  }
};
