export enum ETheme {
  HEADER = 'header',
  DOCUMENT = 'document',
  TEXT = 'text',
  GRADIENT_LINE = 'gradientLine',
  GRADIENT_LINE_REVERSE = 'gradientLineReverse',
  MENU_LINE = 'menuLine',
  MENU_LINE_ACTIVE = 'menuLineActive',
  ACTIVE_ICON = 'activeIcon',
  ACTIVE_ICON_COLOR = 'activeIconColor',
  WHITE = 'white',
}

export default interface ITheme {
  [ETheme.HEADER]: string;
  [ETheme.DOCUMENT]: string;
  [ETheme.TEXT]: string;
  [ETheme.GRADIENT_LINE]: string;
  [ETheme.GRADIENT_LINE_REVERSE]: string;
  [ETheme.MENU_LINE]: string;
  [ETheme.MENU_LINE_ACTIVE]: string;
  [ETheme.ACTIVE_ICON]: string;
  [ETheme.ACTIVE_ICON_COLOR]: string;
  [ETheme.WHITE]: string;
}
