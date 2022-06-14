import { FC } from 'react';
import { HeaderLayout } from '../../layouts';
import { IComponent } from '../../types';
import GreatServiceLandingPageUi from './greatService';
import IntroductionLandingPageUi from './introduction';

const LandingPageUi: FC<IComponent<HTMLElement>> = () => {
  return (
    <main>
      <HeaderLayout />

      <IntroductionLandingPageUi />

      <GreatServiceLandingPageUi />

      <div style={{ height: 200 }} />
    </main>
  );
};

export default LandingPageUi;
