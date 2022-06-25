import { ILocale } from '../../i18n/types';
import ITheme from '../../themes/types';

export type tThemesType =
  | 'white-purple'
  | 'white-blue'
  | 'dark'
  | 'blue-purple'
  | 'blue';

export interface IThemeState {
  activeThemeType: tThemesType;
  activeTheme: ITheme;
}

export interface IThemeContext extends IThemeState {
  handleChangeThemeType(newActiveTheme: tThemesType): void;
}
