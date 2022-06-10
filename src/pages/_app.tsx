import type { AppProps } from 'next/app';
import { ContextProvider, useThemeContext } from '../gsm';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './../styles/main.scss';
import { FC } from 'react';
import { IComponent } from '../types';

const AppRunner: FC<IComponent> = ({ children }) => {
  const { activeTheme, activeThemeType } = useThemeContext();

  return (
    <div
      className={`app ${activeThemeType}`}
      style={{ background: activeTheme.document }}>
      {children}
    </div>
  );
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ContextProvider>
      <AppRunner>
        <Component {...pageProps} />
      </AppRunner>
    </ContextProvider>
  );
}

export default MyApp;
