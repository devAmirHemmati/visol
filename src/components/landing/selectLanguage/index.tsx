import { FC } from 'react';
import { BsCaretLeftFill } from 'react-icons/bs';
import { useI18Context, useThemeContext } from '../../../gsm';
import { ETheme } from '../../../themes/types.d';
import { handleGetCustomI18nHtml } from '../../../utilities';
import { Image, Typography } from '../..';
import { ISelectLanguageLandingPageUi } from './types';
import classes from './styles.module.scss';
import staticImagesURL from '../../../StaticImagesURL';

const SelectLanguageLandingPageUi: FC<ISelectLanguageLandingPageUi> = ({
  className = '',
  ...props
}) => {
  const { activeLocaleWords } = useI18Context();
  const { activeTheme } = useThemeContext();

  const countries = [
    {
      imageUrl: staticImagesURL.arabic,
    },
    {
      imageUrl: staticImagesURL.dutch,
    },
    {
      imageUrl: staticImagesURL.french,
    },
    {
      imageUrl: staticImagesURL.german,
    },
    {
      imageUrl: staticImagesURL.italy,
    },
    {
      imageUrl: staticImagesURL.portuguese,
    },
    {
      imageUrl: staticImagesURL.russian,
    },
    {
      imageUrl: staticImagesURL.spain,
    },
    {
      imageUrl: staticImagesURL.portuguese,
    },
  ];

  return (
    <div className={`${className} ${classes.wrapper}`} {...props}>
      <div className={classes.content}>
        <div className={classes.countries}>
          <Typography
            className={classes.countriesTitle}
            component="span"
            variant="tiny"
            noneSelection
            color={ETheme.TEXT}>
            <BsCaretLeftFill size={18} />

            {activeLocaleWords.landingIntroductionCountryTitle}
          </Typography>

          {countries.map((item, key) => (
            <div
              key={key}
              className={`${classes.countriesItem} ${
                classes[`countriesItem${key + 1}`]
              }`}>
              <Image
                src={item.imageUrl}
                alt={item.imageUrl}
                width={52}
                height={31}
              />
            </div>
          ))}
        </div>

        <Typography
          component="h2"
          variant="title-1"
          color={ETheme.TEXT}
          noneSelection
          textAlgin="center"
          style={{ borderBottomColor: activeTheme.text }}>
          {activeLocaleWords.landingIntroductionTitle}
        </Typography>

        <Typography
          variant="text-1"
          color={ETheme.TEXT}
          dangerouslySetInnerHTML={{
            __html: handleGetCustomI18nHtml(
              activeLocaleWords.landingIntroductionDescriptionHTML
            ),
          }}
          textAlgin="center"
          noneSelection
        />
      </div>

      <div className={classes.image}>
        <Image
          src={staticImagesURL.teacher}
          alt={staticImagesURL.teacher}
          layout="fill"
        />
      </div>
    </div>
  );
};

export default SelectLanguageLandingPageUi;
