import Link from 'next/link';
import { Typography } from '../../components';
import { useI18Context } from '../../gsm';
import staticImagesURL from '../../StaticImagesURL';
import { ETheme } from '../../themes/types.d';
import ContainerLayout from '../container';
import classes from './styles.module.scss';

const FooterLayout = () => {
  const { activeLocaleWords } = useI18Context();

  return (
    <footer
      className={classes.wrapper}
      style={{ backgroundImage: `url(${staticImagesURL.commentBackground})` }}>
      <ContainerLayout className={classes.container}>
        {activeLocaleWords.footerItems.map((menu, menuIndex) => (
          <div key={menuIndex}>
            {menu.map((item, index) => {
              const isExternalLink = /^https?:\/\//.test(item.to);

              if (isExternalLink || item.isBlank)
                return (
                  <div key={index}>
                    <Typography
                      component="a"
                      href={item.to}
                      variant="text-9"
                      textAlgin="center"
                      target={item.isBlank ? '_blank' : '_self'}
                      color={ETheme.FOOTER}>
                      {item.title}
                    </Typography>
                  </div>
                );
              return (
                <div key={index}>
                  <Link href={item.to}>
                    <Typography
                      component="a"
                      variant="text-9"
                      textAlgin="center"
                      target={item.isBlank ? '_blank' : '_self'}
                      color={ETheme.FOOTER}>
                      {item.title}
                    </Typography>
                  </Link>
                </div>
              );
            })}
          </div>
        ))}
      </ContainerLayout>
    </footer>
  );
};

export default FooterLayout;
