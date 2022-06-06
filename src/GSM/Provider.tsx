import { FC, AllHTMLAttributes } from 'react';
import ContextI18nProvider from './I18n';
import ContextThemeProvider from './Theme';

const ContextProvider: FC<AllHTMLAttributes<HTMLElement>> = ({ children }) => {
  return (
    <ContextI18nProvider>
      <ContextThemeProvider>{children}</ContextThemeProvider>
    </ContextI18nProvider>
  );
};

export default ContextProvider;
