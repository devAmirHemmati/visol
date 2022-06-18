import { BsStarFill } from 'react-icons/bs';
import { useI18Context } from '../../../gsm';
import staticImagesURL from '../../../StaticImagesURL';
import { ETheme } from '../../../themes/types.d';
import { Image, Typography } from '../../ui';
import classes from './styles.module.scss';

const VideoLandingPageUi = () => {
  const { activeLocaleWords } = useI18Context();

  return (
    <div className={classes.wrapper}>
      <div className={classes.video}>
        <div className={classes.content}>
          <Image
            src={staticImagesURL.videoBot}
            alt={staticImagesURL.videoBot}
            width={295}
            height={328}
          />

          <Typography
            variant="text-6"
            component="p"
            textAlgin="center"
            color={ETheme.VIDEO_TITLE}>
            {activeLocaleWords.landingVideoTitle}
          </Typography>
        </div>

        <div className={`${classes.stars} ${classes.starsStart}`}>
          {Array(221)
            .fill(null)
            .map((_, index) => (
              <BsStarFill key={index} color="#cdccd2" />
            ))}
        </div>

        <div className={classes.videoContainer}>
          <iframe
            src={activeLocaleWords.landingVideoURL}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        <div className={`${classes.stars} ${classes.starsEnd}`}>
          {Array(221)
            .fill(null)
            .map((_, index) => (
              <BsStarFill key={index} color="#cdccd2" />
            ))}
        </div>
      </div>
    </div>
  );
};

export default VideoLandingPageUi;
