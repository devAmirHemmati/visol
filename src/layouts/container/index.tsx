import { FC } from 'react';
import { IComponent } from '../../types';
import classes from './styles.module.scss';

const ContainerLayout: FC<IComponent> = ({
  className = '',
  children,
  ...props
}) => {
  return (
    <div className={`${className} ${classes.wrapper}`} {...props}>
      {children}
    </div>
  );
};

export default ContainerLayout;
