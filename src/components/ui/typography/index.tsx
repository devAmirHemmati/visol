import { FC, forwardRef, ElementType } from 'react';
import { useThemeContext } from '../../../gsm';
import styles from './styles.module.scss';
import { ITypographyProps } from './types';

const Typography: FC<ITypographyProps> = ({
  component = 'p',
  variant = 'text-medium',
  className = '',
  textAlgin,
  direction,
  color,
  noneSelection,
  children,
  textDecoration = 'none',
  withIcon,
  href,
  style = {},
  ...args
}) => {
  let Component: ElementType | 'link' = component;
  const { activeTheme } = useThemeContext();

  if (component === 'link') {
    Component = 'a';
  }

  return (
    <Component
      className={`${styles.typography} ${
        styles[`typography-variant-${variant}`]
      } ${styles[`typography-align-${textAlgin}`]} ${
        noneSelection ? styles['typography-none-selection'] : ''
      } ${
        component === 'link' || component === 'a'
          ? styles['typography-cursor-pointer']
          : ''
      } ${styles[`typography-direction-${direction}`]} ${
        typeof textDecoration === 'string'
          ? styles[`typography-text-decoration-${textDecoration}`]
          : ''
      } ${withIcon ? styles['typography-with-icon'] : ''} ${className}`}
      href={component === 'a' ? href : undefined}
      style={{ color: activeTheme[color] }}
      {...args}>
      {children}
    </Component>
  );
};

export default Typography;
