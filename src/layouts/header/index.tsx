import { FC } from 'react';
import { AiFillAndroid, AiFillApple } from 'react-icons/ai';
import { Image, Button } from '../../components';
import { useI18Context, useThemeContext } from '../../gsm';
import { tThemesType } from '../../gsm/theme/types';
import staticImagesURL from '../../StaticImagesURL';
import ContainerLayout from '../container';
import { IHeaderLayoutProps } from './types';
import classes from './styles.module.scss';

const HeaderLayout: FC<IHeaderLayoutProps> = () => {
  const { activeTheme, activeThemeType, handleChangeThemeType } =
    useThemeContext();
  const { activeLocaleWords } = useI18Context();

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
    console.log(themeType);
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
      </ContainerLayout>
    </header>
  );
};

export default HeaderLayout;
