import { MdSupportAgent } from 'react-icons/md';
import { RiShoppingBag3Line } from 'react-icons/ri';
import { GiBookPile, GiRunningShoe, GiRead } from 'react-icons/gi';
import { useI18Context, useThemeContext } from '../../../gsm';
import { ContainerLayout } from '../../../layouts';
import { ETheme } from '../../../themes/types.d';
import { Image, Typography } from '../../ui';
import classes from './styles.module.scss';
import { useState } from 'react';

const GreatServiceLandingPageUi = () => {
  const { activeLocaleWords } = useI18Context();
  const { activeTheme } = useThemeContext();
  const [activeMenuIndex, setActiveMenuIndex] = useState<number>(0);
  const [beforeActiveMenuIndex, setBeforeActiveMenuIndex] = useState<number>(0);

  const icons = [
    MdSupportAgent,
    RiShoppingBag3Line,
    GiBookPile,
    GiRunningShoe,
    GiRead,
    GiBookPile,
    GiRunningShoe,
  ];

  const items = activeLocaleWords.landingGreatServiceItems.map(
    (item, index) => ({
      ...item,
      Icon: icons[index],
    })
  );
  const activeItem = items[activeMenuIndex];

  const handleActiveItem = (index: number) => {
    setActiveMenuIndex(index);
  };

  return (
    <ContainerLayout className={classes.wrapper}>
      <Typography
        color={ETheme.TEXT}
        variant="title-2"
        component="h2"
        textAlgin="center">
        {activeLocaleWords.landingGreatServiceTitle}
      </Typography>

      <div className={classes.description}>
        <Typography color={ETheme.TEXT} variant="text-2" textAlgin="center">
          <span style={{ background: activeTheme[ETheme.GRADIENT_LINE] }} />

          {activeLocaleWords.landingGreatServiceDescription}

          <span
            style={{ background: activeTheme[ETheme.GRADIENT_LINE_REVERSE] }}
          />
        </Typography>
      </div>

      <div className={classes.box}>
        <ul className={classes.menu}>
          <div
            className={classes.menuCircle}
            style={{
              top: 72 * activeMenuIndex + 32 * activeMenuIndex + 72 / 2,
              background: activeTheme.activeIcon,
            }}
          />

          {items.map(({ Icon, title }, index) => {
            const isActive = activeMenuIndex === index;

            return (
              <li
                key={index}
                className={`${classes.menuItem} ${
                  isActive ? classes.menuItemActive : ''
                }`}
                style={{
                  borderRightColor: isActive
                    ? activeTheme.menuLineActive
                    : activeTheme.menuLine,
                }}
                onClick={() => {
                  handleActiveItem(index);
                }}>
                <div
                  className={`${classes.menuItemIcon} ${
                    isActive ? classes.menuItemIconActive : ''
                  }`}
                  style={{
                    backgroundColor: isActive
                      ? activeTheme.activeIcon
                      : 'transparent',
                  }}>
                  <Icon
                    color={
                      isActive
                        ? activeTheme[ETheme.ACTIVE_ICON_COLOR]
                        : activeTheme[ETheme.TEXT]
                    }
                    size={25}
                  />
                </div>

                <Typography
                  variant="text-3"
                  color={ETheme.TEXT}
                  className={`${classes.menuItemTitle} ${
                    isActive ? classes.menuItemTitleActive : ''
                  }`}
                  textAlgin="center"
                  noneSelection>
                  {title}
                </Typography>

                <span
                  className={`${classes.menuItemBorder} ${
                    isActive ? classes.menuItemBorderActive : ''
                  }`}
                  style={{
                    background: isActive
                      ? activeTheme[ETheme.MENU_LINE_ACTIVE]
                      : activeTheme[ETheme.MENU_LINE],
                  }}
                />
              </li>
            );
          })}
        </ul>
        <div className={classes.main}>
          <div>
            <div className={classes.image}>
              <Image
                src={`/images/${activeItem.imageName}`}
                alt={activeItem.title}
                draggable="false"
                layout="fill"
              />
            </div>

            <div className={classes.content}>
              <Typography color={ETheme.TEXT} variant="title-3" component="h3">
                {activeItem.title}
              </Typography>

              <Typography color={ETheme.TEXT} variant="text-4">
                {activeItem.description}
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </ContainerLayout>
  );
};

export default GreatServiceLandingPageUi;
