import { BiBookReader } from 'react-icons/bi';
import { useI18Context, useThemeContext } from '../../../gsm';
import staticImagesURL from '../../../StaticImagesURL';
import { ETheme } from '../../../themes/types.d';
import { Typography } from '../../ui';
import classes from './styles.module.scss';

const StatisticsLandingPageUi = () => {
  const { activeLocaleWords } = useI18Context();
  const { activeTheme } = useThemeContext();

  return (
    <div
      style={{
        backgroundImage: `url(${staticImagesURL.statisticsBackground})`,
      }}
      className={classes.wrapper}>
      <Typography
        textAlgin="center"
        component="h2"
        variant="title-2"
        className={classes.title}
        color={ETheme.WHITE}>
        <span style={{ background: activeTheme.gradientLine }} />

        {activeLocaleWords.landingStatisticsTitle}

        <span style={{ background: activeTheme.gradientLineReverse }} />
      </Typography>

      <ul className={classes.list}>
        {activeLocaleWords.landingStatisticsItems.map((item, index) => (
          <li className={classes.listItem} key={index}>
            <div className={classes.listItemHeader}>
              <BiBookReader size={40} color={activeTheme[ETheme.WHITE]} />

              <Typography variant="text-3" component="p" color={ETheme.WHITE}>
                {item.title}
              </Typography>
            </div>

            <div className={classes.listItemCircular}>
              <Typography
                color={ETheme.WHITE}
                variant="text-5"
                component="p"
                textAlgin="center">
                {item.value}+
              </Typography>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StatisticsLandingPageUi;
