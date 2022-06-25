import { useEffect, useState } from 'react';
import { AiFillAndroid, AiFillApple, AiFillStar } from 'react-icons/ai';
import { useI18Context, useThemeContext } from '../../../gsm';
import { ContainerLayout } from '../../../layouts';
import staticImagesURL from '../../../StaticImagesURL';
import { ETheme } from '../../../themes/types.d';
import { Slider, Typography } from '../../ui';
import classes from './styles.module.scss';

const CommentsLandingPageUi = () => {
  const { activeLocaleWords } = useI18Context();
  const { activeTheme } = useThemeContext();
  const [isLocale, setIsLocale] = useState<boolean>(false);

  useEffect(() => {
    setIsLocale(true);
  }, []);

  return (
    <div
      className={classes.wrapper}
      style={{ backgroundImage: `url(${staticImagesURL.commentBackground})` }}>
      <ContainerLayout>
        <Typography
          className={classes.title}
          color={ETheme.WHITE}
          variant="title-4"
          textAlgin="center">
          {activeLocaleWords.landingCommentsTitle}
        </Typography>

        {isLocale && (
          <Slider
            breakpoints={{
              // XL
              1200: {
                slidesPerView: 2,
                slidesPerGroup: 2,
                spaceBetween: 0,
              },
              // LG
              992: {
                slidesPerView: 1,
                slidesPerGroup: 1,
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
            loop
            isShowArrows
            className={`${classes.comments} landing-comments-section`}>
            {activeLocaleWords.landingCommentsItems.map((item, index) => (
              <div key={index} className={classes.commentsItem}>
                <div className={classes.commentsItemHeader}>
                  <div className={classes.storeInformation}>
                    <Typography
                      variant="text-2"
                      color={ETheme.WHITE}
                      component="p">
                      {item.osName}
                    </Typography>

                    <Typography
                      component="p"
                      variant="text-4"
                      color={ETheme.WHITE}>
                      {item.os === 'Android' && <AiFillApple size={43} />}

                      {item.os === 'IOS' && <AiFillAndroid size={43} />}

                      {item.storeRate}
                    </Typography>

                    <div className={classes.star}>
                      {Array(Math.floor(item.storeRate))
                        .fill(null)
                        .map((__, rateIndex) => (
                          <AiFillStar
                            color="#f3c240"
                            size={39}
                            key={rateIndex}
                          />
                        ))}
                    </div>
                  </div>

                  <div
                    className={classes.borderBottom}
                    style={{ borderBottomColor: activeTheme.white }}
                  />

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
                    <Typography
                      variant="text-8"
                      color={ETheme.COMMENT_FULL_NAME}>
                      {item.fullName}
                    </Typography>

                    <div className={classes.star}>
                      {Array(Math.floor(item.userRate))
                        .fill(null)
                        .map((__, rateIndex) => (
                          <AiFillStar
                            color="#f3c240"
                            size={39}
                            key={rateIndex}
                          />
                        ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        )}
      </ContainerLayout>
    </div>
  );
};

export default CommentsLandingPageUi;
