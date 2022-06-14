import { ETheme } from './../../../themes/types.d';
import { ElementType } from 'react';
import { IComponent } from '../../../types';

type tTypographyVariant =
  | 'title-1'
  | 'title-2'
  | 'title-3'
  | 'text-1'
  | 'text-2'
  | 'text-3'
  | 'text-4'
  | 'tiny';

type tTypographyDirection = 'rtl' | 'ltr';

type tTypographyAlign = 'left' | 'center' | 'right' | 'justify';

type tTypographyTextDecoration = 'none' | 'underline';

export interface ITypographyProps extends IComponent<HTMLElement> {
  component?: ElementType;
  variant: tTypographyVariant;
  color: ETheme;
  direction?: tTypographyDirection;
  textAlgin?: tTypographyAlign;
  noneSelection?: boolean;
  activeClassName?: string;
  textDecoration?: tTypographyTextDecoration;
  withIcon?: boolean;
  to?: string;
}
