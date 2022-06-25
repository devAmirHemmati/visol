/* eslint-disable react/display-name */
import { FC, forwardRef } from 'react';
import { IIconContainerProps } from './types';

const IconContainer: FC<IIconContainerProps> = forwardRef(
  ({ children, className = '', ...args }: IIconContainerProps, ref) => {
    return (
      <span ref={ref as any} className={`${className}`} {...args}>
        {children}
      </span>
    );
  }
);

export default IconContainer;
