import type { AppProps } from 'next/app';
import { ContextProvider } from '../GSM';
import './../styles/main.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ContextProvider>
      <Component {...pageProps} />
    </ContextProvider>
  );
}

export default MyApp;
