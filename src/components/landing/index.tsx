import { FC } from 'react';
import { HeaderLayout } from '../../layouts';
import { IComponent } from '../../types';
import IntroductionLandingPageUi from './introduction';

const LandingPageUi: FC<IComponent<HTMLElement>> = () => {
  return (
    <main>
      <HeaderLayout />

      <IntroductionLandingPageUi />
    </main>
  );
};

export default LandingPageUi;
