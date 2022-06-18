import { FaBookReader, FaDiceD20 } from 'react-icons/fa';
import { ImBooks } from 'react-icons/im';
import {
  GiPerspectiveDiceFour,
  GiDiceTarget,
  GiRunningShoe,
  GiBrain,
} from 'react-icons/gi';
import { BsFillDice6Fill } from 'react-icons/bs';
import { useI18Context } from '../../../gsm';
import { ContainerLayout } from '../../../layouts';
import { ETheme } from '../../../themes/types.d';
import { Typography } from '../../ui';
import classes from './styles.module.scss';

const ServicesLandingPageUi = () => {
  const { activeLocaleWords } = useI18Context();

  const icons = [
    FaBookReader,
    ImBooks,
    GiRunningShoe,
    GiPerspectiveDiceFour,
    GiBrain,
    GiDiceTarget,
  ];

  const serviceItems = activeLocaleWords.landingServicesItems.map(
    (item, index) => {
      return {
        ...item,
        Icon: icons[index],
      };
    }
  );

  return (
    <div className={classes.wrapper}>
      <ContainerLayout>
        <Typography
          component="h2"
          variant="title-2"
          color={ETheme.TEXT}
          textAlgin="center">
          {activeLocaleWords.landingServicesTitle}
        </Typography>

        <Typography variant="text-2" color={ETheme.TEXT} textAlgin="center">
          {activeLocaleWords.landingServicesDescription}
        </Typography>

        <div className={classes.service}>
          {serviceItems.map(({ Icon, ...item }, index) => (
            <div key={index} className={classes.serviceItem}>
              <div className={classes.icon}>
                <Icon size={72} color="#ef7c00" />
              </div>

              <Typography
                variant="title-6"
                component="h4"
                color={ETheme.TEXT}
                textAlgin="center">
                {item.title}
              </Typography>

              <Typography
                variant="text-10"
                color={ETheme.TEXT}
                textAlgin="center">
                {item.description}
              </Typography>
            </div>
          ))}
        </div>
      </ContainerLayout>
    </div>
  );
};

export default ServicesLandingPageUi;
