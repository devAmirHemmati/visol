import { FC } from 'react';
import { HeaderLayout } from '../../Layouts';
import { IComponent } from '../../types';

const LandingPageUi: FC<IComponent<HTMLElement>> = () => {
  return (
    <main>
      <HeaderLayout />
    </main>
  );
};

export default LandingPageUi;
