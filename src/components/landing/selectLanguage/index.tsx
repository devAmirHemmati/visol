import { FC } from 'react';
import { ISelectLanguageLandingPageUi } from './types';

const SelectLanguageLandingPageUi: FC<ISelectLanguageLandingPageUi> = ({
  className = '',
  ...props
}) => {
  return (
    <div className={`${className}`} {...props}>
      test
    </div>
  );
};

export default SelectLanguageLandingPageUi;
