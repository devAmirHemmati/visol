import { ETheme } from './../../../themes/types.d';
import { ElementType } from 'react';
import { IComponent } from '../../../types';

type tTypographyVariant =
  | 'title-1'
  | 'title-2'
  | 'title-3'
  | 'title-4'
  | 'title-5'
  | 'title-6'
  | 'title-7'
  | 'text-1'
  | 'text-2'
  | 'text-3'
  | 'text-4'
  | 'text-5'
  | 'text-6'
  | 'text-7'
  | 'text-8'
  | 'text-9'
  | 'text-10'
  | 'text-11'
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
