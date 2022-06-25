import { GiRead, GiRunningShoe } from 'react-icons/gi';
import { ImBook } from 'react-icons/im';
import { useI18Context, useThemeContext } from '../../../gsm';
import { ContainerLayout } from '../../../layouts';
import { ETheme } from '../../../themes/types.d';
import { Typography } from '../../ui';
import classes from './styles.module.scss';

const LearningStepsLandingPageUi = () => {
  const { activeLocaleWords } = useI18Context();
  const { activeTheme } = useThemeContext();

  const icons = [GiRead, ImBook, GiRunningShoe, GiRunningShoe];
  const items = activeLocaleWords.landingLearningStepsItems.map(
    (item, index) => ({ ...item, Icon: icons[index] })
  );

  return (
    <div className={classes.wrapper}>
      <ContainerLayout>
        <Typography
          variant="title-2"
          component="h2"
          color={ETheme.TEXT}
          textAlgin="center">
          {activeLocaleWords.landingLearningStepsTitle}
        </Typography>

        <div className={classes.steps}>
          <div className={classes.numbers}>
            <div className={classes.line} />

            <div className={classes.circles}>
              {Array(activeLocaleWords.landingLearningStepsItems.length)
                .fill(null)
                .map((_, index) => (
                  <div key={index} className={classes.circlesItem}>
                    {index + 1}
                  </div>
                ))}
            </div>
          </div>

          <div className={classes.learnings}>
            {items.map(({ Icon, title, description }, index) => (
              <div className={classes.learningsItem} key={index}>
                <div className={classes.learningsItemHeader}>
                  <Icon size={67} color={activeTheme[ETheme.TEXT]} />

                  <Typography
                    component="h4"
                    variant="title-3"
                    textAlgin="center"
                    color={ETheme.TEXT}>
                    {title}
                  </Typography>
                </div>

                <Typography
                  variant="text-5"
                  color={ETheme.TEXT}
                  textAlgin="center">
                  {description}
                </Typography>
              </div>
            ))}
          </div>
        </div>
      </ContainerLayout>
    </div>
  );
};

export default LearningStepsLandingPageUi;
