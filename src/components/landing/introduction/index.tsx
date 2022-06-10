import { FC } from 'react';
import { ContainerLayout } from '../../../layouts';
import { Slider } from '../../ui';
import SelectLanguageLandingPageUi from '../selectLanguage';
import classes from './styles.module.scss';

const IntroductionLandingPageUi: FC = () => {
  return (
    <ContainerLayout className={classes.wrapper}>
      <Slider>
        {[
          <SelectLanguageLandingPageUi className={classes.slider} key={0} />,
          <div className={classes.slider} key={1}>
            2
          </div>,
        ]}
      </Slider>
    </ContainerLayout>
  );
};

export default IntroductionLandingPageUi;
