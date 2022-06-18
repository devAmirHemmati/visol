import { FC } from 'react';
import { HeaderLayout } from '../../layouts';
import { IComponent } from '../../types';
import CommentsLandingPageUi from './comments';
import GreatServiceLandingPageUi from './greatService';
import IntroductionLandingPageUi from './introduction';
import ServicesLandingPageUi from './services';
import StatisticsLandingPageUi from './statistics';
import VideoLandingPageUi from './video';

const LandingPageUi: FC<IComponent<HTMLElement>> = () => {
  return (
    <main>
      <HeaderLayout />

      <IntroductionLandingPageUi />

      <GreatServiceLandingPageUi />

      <StatisticsLandingPageUi />

      <VideoLandingPageUi />

      <CommentsLandingPageUi />

      <ServicesLandingPageUi />
    </main>
  );
};

export default LandingPageUi;
