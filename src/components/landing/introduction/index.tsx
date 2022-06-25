import Image from 'next/image';
import { FC, useEffect, useState } from 'react';
import { useI18Context } from '../../../gsm';
import { ContainerLayout } from '../../../layouts';
import staticImagesURL from '../../../StaticImagesURL';
import { ETheme } from '../../../themes/types.d';
import { Slider, Typography } from '../../ui';
import classes from './styles.module.scss';

const IntroductionLandingPageUi: FC = () => {
  const { activeLocaleWords } = useI18Context();
  const [isLocale, setIsLocale] = useState<boolean>(false);

  useEffect(() => {
    setIsLocale(true);
  }, []);

  const countries = [
    { imageURL: staticImagesURL.arabic, country: 'arabic' },
    { imageURL: staticImagesURL.dutch, country: 'dutch' },
    { imageURL: staticImagesURL.french, country: 'french' },
    { imageURL: staticImagesURL.german, country: 'german' },
    { imageURL: staticImagesURL.italy, country: 'italy' },
    { imageURL: staticImagesURL.portuguese, country: 'portuguese' },
    { imageURL: staticImagesURL.russian, country: 'russian' },
    { imageURL: staticImagesURL.spain, country: 'spain' },
  ];

  return (
    <div className={classes.wrapper}>
      <Slider className={classes.slider} isShowArrows isShowArrowsBorder>
        {activeLocaleWords.landingIntroductionSliderItems.map((item, index) => (
          <Image src={item} alt={item} key={index} layout="fill" />
        ))}
      </Slider>

      <ContainerLayout>
        {isLocale && (
          <Slider
            wrapperClassName={classes.countriesWrapper}
            className={classes.countries}
            breakpoints={{
              1200: {
                slidesPerView: 8,
              },
              992: {
                slidesPerView: 5,
              },
              767.98: {
                slidesPerView: 4,
              },
              575.98: {
                slidesPerView: 2,
              },
              0: {
                slidesPerView: 1,
              },
            }}
            isShowArrows>
            {countries.map((item, index) => (
              <div key={index}>
                <Image
                  src={item.imageURL}
                  alt={item.imageURL}
                  width={97}
                  height={58}
                />

                <Typography
                  textAlgin="center"
                  color={ETheme.WHITE}
                  variant="text-12">
                  {item.country}
                </Typography>
              </div>
            ))}
          </Slider>
        )}
      </ContainerLayout>
    </div>
  );
};

export default IntroductionLandingPageUi;
