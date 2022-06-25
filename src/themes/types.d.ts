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
  VIDEO_TITLE = 'videoTitle',
  COMMENT_TITLE = 'commentTitle',
  COMMENT_FULL_NAME = 'commentFullName',
  FOOTER = 'footer',
  SLIDER_ARROWS = 'sliderArrows',
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
  [ETheme.VIDEO_TITLE]: string;
  [ETheme.COMMENT_TITLE]: string;
  [ETheme.COMMENT_FULL_NAME]: string;
  [ETheme.FOOTER]: string;
  [ETheme.SLIDER_ARROWS]: string;
}
