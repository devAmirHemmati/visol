import { FC, useState } from 'react';
import { HiMenuAlt1 } from 'react-icons/hi';
import { AiFillAndroid, AiFillApple } from 'react-icons/ai';
import { FaSignInAlt } from 'react-icons/fa';
import { RiUserAddLine } from 'react-icons/ri';
import { Image, Button, Typography } from '../../components';
import { useI18Context, useThemeContext } from '../../gsm';
import { tThemesType } from '../../gsm/theme/types';
import staticImagesURL from '../../StaticImagesURL';
import ContainerLayout from '../container';
import { IHeaderLayoutProps } from './types';
import classes from './styles.module.scss';
import { ETheme } from '../../themes/types.d';

const HeaderLayout: FC<IHeaderLayoutProps> = () => {
  const { activeTheme, activeThemeType, handleChangeThemeType } =
    useThemeContext();
  const { activeLocaleWords } = useI18Context();
  const [isActiveMenu, setIsActiveMenu] = useState<boolean>(false);

  const circlesItem: { color: string; themeType: tThemesType }[] = [
    {
      color: 'linear-gradient(180deg, #F2EFF5 0%, #604581 100%)',
      themeType: 'white-purple',
    },
    {
      color: 'linear-gradient(180deg, #E4E5EC 0%, #007991 100%)',
      themeType: 'white-blue',
    },
    {
      color: '#2A2D3E',
      themeType: 'dark',
    },
    {
      color: 'linear-gradient(180deg, #EA95B4 0%, #262261 100%)',
      themeType: 'blue-purple',
    },
    {
      color: 'linear-gradient(180deg, #007991 0%, #2E4A66 100%)',
      themeType: 'blue',
    },
  ];

  const handleClickChangeTheme = (themeType: tThemesType) => {
    handleChangeThemeType(themeType);
  };

  return (
    <header
      className={classes.wrapper}
      style={{ background: activeTheme.header }}>
      <ContainerLayout className={classes.container}>
        <Image src={staticImagesURL.visol} alt="alt" width={100} height={100} />

        <div className={classes.buttons}>
          <Button>
            <AiFillAndroid
              color="#ffffff"
              size={25}
              style={{ marginRight: 9 }}
            />
            {activeLocaleWords.android}
          </Button>

          <Button>
            <AiFillApple color="#ffffff" size={25} style={{ marginRight: 9 }} />
            {activeLocaleWords.ios}
          </Button>
        </div>

        <div className={classes.buttons}>
          <Button>{activeLocaleWords.registerToApp}</Button>

          <Button>{activeLocaleWords.loginToApp}</Button>
        </div>

        <div style={{ display: 'flex' }}>
          <div className={classes.circles}>
            {circlesItem.map((item, key) => (
              <div
                className={`${classes.circlesItem} ${
                  item.themeType === activeThemeType
                    ? classes.circlesItemActive
                    : ''
                }`}
                style={{
                  background: item.color,
                }}
                onClick={() => {
                  handleClickChangeTheme(item.themeType);
                }}
                key={key}
              />
            ))}
          </div>

          <div
            className={classes.menuIcon}
            onClick={() => {
              setIsActiveMenu((prevState) => !prevState);
            }}>
            <HiMenuAlt1 size={25} color={activeTheme.white} />
          </div>
        </div>
      </ContainerLayout>

      {isActiveMenu && (
        <div
          className={`${classes.menu}`}
          style={{ background: activeTheme.header }}>
          <ContainerLayout>
            <Typography color={ETheme.WHITE} variant="text-4">
              <RiUserAddLine
                color="#ffffff"
                size={25}
                style={{ marginRight: 9 }}
              />

              {activeLocaleWords.registerToApp}
            </Typography>

            <Typography color={ETheme.WHITE} variant="text-4">
              <FaSignInAlt
                color="#ffffff"
                size={25}
                style={{ marginRight: 9 }}
              />

              {activeLocaleWords.loginToApp}
            </Typography>

            <Typography color={ETheme.WHITE} variant="text-4">
              <AiFillAndroid
                color="#ffffff"
                size={25}
                style={{ marginRight: 9 }}
              />
              {activeLocaleWords.android}
            </Typography>

            <Typography color={ETheme.WHITE} variant="text-4">
              <AiFillApple
                color="#ffffff"
                size={25}
                style={{ marginRight: 9 }}
              />
              {activeLocaleWords.ios}
            </Typography>
          </ContainerLayout>
        </div>
      )}
    </header>
  );
};

export default HeaderLayout;
