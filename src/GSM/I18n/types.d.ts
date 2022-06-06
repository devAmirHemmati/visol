import { ILocale } from '../../I18n/types';

export type tLocales = 'fa' | 'en';

export interface Ii18nState {
  activeLocale: tLocales;
  activeLocaleWords: ILocale;
}

export interface Ii18nContext extends Ii18nState {}
