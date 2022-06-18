import { useI18Context } from '../../../gsm';
import { ETheme } from '../../../themes/types.d';
import { Slider, Typography } from '../../ui';
import classes from './styles.module.scss';

const LetterNewsLandingPageUi = () => {
  const { activeLocaleWords } = useI18Context();

  return (
    <div className={classes.wrapper}>
      <Typography
        component="h2"
        variant="title-7"
        color={ETheme.TEXT}
        textAlgin="center">
        Letter News
      </Typography>

      <Slider
        className={classes.letterNews}
        navigation={false}
        slidesPerView={3}>
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
    </div>
  );
};

export default LetterNewsLandingPageUi;
