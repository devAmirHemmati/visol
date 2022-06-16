import { FC } from 'react';
import { HeaderLayout } from '../../layouts';
import { IComponent } from '../../types';
import GreatServiceLandingPageUi from './greatService';
import IntroductionLandingPageUi from './introduction';
import StatisticsLandingPageUi from './statistics';

const LandingPageUi: FC<IComponent<HTMLElement>> = () => {
  return (
    <main>
      <HeaderLayout />

      <IntroductionLandingPageUi />

      <GreatServiceLandingPageUi />

      <StatisticsLandingPageUi />
    </main>
  );
};

export default LandingPageUi;
