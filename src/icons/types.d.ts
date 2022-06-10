import { AllHTMLAttributes } from 'react';

export interface IIconContainerProps
  extends AllHTMLAttributes<HTMLSpanElement> {}

export interface IIconProps extends IIconContainerProps {
  svgWidth?: number;
  svgHeight?: number;
  svgColor?: string;
  isActive?: boolean;
}
