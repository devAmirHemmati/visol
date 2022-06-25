import { FC } from 'react';
import { IButtonProps } from './types';
import classes from './styles.module.scss';

const Button: FC<IButtonProps> = ({
  type = 'button',
  color = 'outline-white',
  buttonSize = 'medium',
  className = '',
  children,
  ...props
}) => {
  return (
    <button
      type={type}
      className={`${className} ${classes.wrapper} ${
        classes[`color-${color}`]
      } ${classes[`size-${buttonSize}`]}`}
      {...props}>
      {children}
    </button>
  );
};

export default Button;
