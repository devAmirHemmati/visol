import { useEffect, useState } from 'react';
import { useI18Context, useThemeContext } from '../../../gsm';
import { ContainerLayout } from '../../../layouts';
import { ETheme } from '../../../themes/types.d';
import { Slider, Typography } from '../../ui';
import classes from './styles.module.scss';

const LetterNewsLandingPageUi = () => {
  const { activeLocaleWords } = useI18Context();
  const { activeTheme } = useThemeContext();
  const [isLocale, setIsLocale] = useState(false);

  useEffect(() => {
    setIsLocale(true);
  }, []);

  return (
    <div className={classes.wrapper}>
      <ContainerLayout>
        <Typography
          component="h2"
          variant="title-7"
          color={ETheme.TEXT}
          textAlgin="center">
          Letter News
        </Typography>

        {isLocale && (
          <Slider
            breakpoints={{
              // XL
              1200: {
                slidesPerView: 3,
                slidesPerGroup: 3,
                spaceBetween: 0,
              },
              // LG
              992: {
                slidesPerView: 2,
                slidesPerGroup: 2,
                spaceBetween: 30,
              },
              // MD
              767.98: {
                slidesPerView: 1,
                slidesPerGroup: 1,
                spaceBetween: 30,
              },
              // SM
              575.98: {
                slidesPerView: 1,
                slidesPerGroup: 1,
                spaceBetween: 30,
              },
              // XS
              0: {
                slidesPerView: 1,
                slidesPerGroup: 1,
                spaceBetween: 30,
              },
            }}
            className={classes.letterNews}
            navigation={false}
            arrowsColor={activeTheme[ETheme.SLIDER_ARROWS]}
            isShowArrows>
            {activeLocaleWords.landingLetterNewsItems.map((item, index) => (
              <div key={index} className={classes.letterNewsItem}>
                <img src={item.imageURL} alt={item.imageURL} />

                <Typography
                  className={classes.letterNewsItemContent}
                  variant="text-11"
                  color={ETheme.WHITE}
                  textAlgin="center">
                  {item.description}
                </Typography>
              </div>
            ))}
          </Slider>
        )}
      </ContainerLayout>
    </div>
  );
};

export default LetterNewsLandingPageUi;
