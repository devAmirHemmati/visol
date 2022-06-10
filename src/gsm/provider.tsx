import { FC, AllHTMLAttributes } from 'react';
import ContextI18nProvider from './i18n';
import ContextThemeProvider from './theme';

const ContextProvider: FC<AllHTMLAttributes<HTMLElement>> = ({ children }) => {
  return (
    <ContextI18nProvider>
      <ContextThemeProvider>{children}</ContextThemeProvider>
    </ContextI18nProvider>
  );
};

export default ContextProvider;
