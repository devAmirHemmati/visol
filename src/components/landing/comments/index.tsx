import { AiFillAndroid, AiFillApple, AiFillStar } from 'react-icons/ai';
import { useI18Context, useThemeContext } from '../../../gsm';
import staticImagesURL from '../../../StaticImagesURL';
import { ETheme } from '../../../themes/types.d';
import { Slider, Typography } from '../../ui';
import classes from './styles.module.scss';

const CommentsLandingPageUi = () => {
  const { activeLocaleWords } = useI18Context();
  const { activeTheme } = useThemeContext();

  return (
    <div
      className={classes.wrapper}
      style={{ backgroundImage: `url(${staticImagesURL.commentBackground})` }}>
      <Typography
        className={classes.title}
        color={ETheme.WHITE}
        variant="title-4"
        textAlgin="center">
        {activeLocaleWords.landingCommentsTitle}
      </Typography>

      <Slider
        slidesPerView={2}
        slidesPerGroup={2}
        loop
        className={`${classes.comments} landing-comments-section`}>
        {activeLocaleWords.landingCommentsItems.map((item, index) => (
          <div key={index} className={classes.commentsItem}>
            <div className={classes.commentsItemHeader}>
              <div
                className={classes.storeInformation}
                style={{ borderBottomColor: activeTheme.white }}>
                <Typography variant="text-2" color={ETheme.WHITE} component="p">
                  {item.osName}
                </Typography>

                <Typography component="p" variant="text-4" color={ETheme.WHITE}>
                  {item.os === 'Android' && <AiFillApple size={43} />}

                  {item.os === 'IOS' && <AiFillAndroid size={43} />}

                  {item.storeRate}
                </Typography>

                <div className={classes.star}>
                  {Array(Math.floor(item.storeRate))
                    .fill(null)
                    .map((__, rateIndex) => (
                      <AiFillStar color="#f3c240" size={39} key={rateIndex} />
                    ))}
                </div>
              </div>

              <Typography
                variant="title-5"
                className={classes.commentsItemHeaderTitle}
                color={ETheme.COMMENT_TITLE}>
                {item.title}
              </Typography>
            </div>

            <div className={classes.commentsItemContent}>
              <img
                src={item.avatarURL}
                alt={item.avatarURL}
                draggable="false"
              />

              <Typography
                color={ETheme.WHITE}
                className={classes.description}
                variant="text-7">
                {item.description}
              </Typography>

              <div className={classes.userInformation}>
                <Typography variant="text-8" color={ETheme.COMMENT_FULL_NAME}>
                  {item.fullName}
                </Typography>

                <div className={classes.star}>
                  {Array(Math.floor(item.userRate))
                    .fill(null)
                    .map((__, rateIndex) => (
                      <AiFillStar color="#f3c240" size={39} key={rateIndex} />
                    ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CommentsLandingPageUi;
