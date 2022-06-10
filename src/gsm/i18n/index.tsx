import { useRouter } from 'next/router';
import {
  AllHTMLAttributes,
  createContext,
  FC,
  useContext,
  useEffect,
  useState,
} from 'react';
import { enLocale, faLocale } from '../../i18n';
import { ILocale } from '../../i18n/types';
import { Ii18nContext, Ii18nState, tLocales } from './types';

export const initialState: Ii18nState = {
  activeLocale: 'en',
  activeLocaleWords: enLocale,
};

const initialContext: Ii18nContext = {
  ...initialState,
};

const I18nContext = createContext<Ii18nContext>(initialContext);

const ContextI18nProvider: FC<AllHTMLAttributes<HTMLElement>> = ({
  children,
}) => {
  const [state, setState] = useState<Ii18nState>(initialState);
  const router = useRouter();

  useEffect(() => {
    let activeLocaleWords: ILocale = enLocale;

    switch (router.locale as tLocales) {
      case 'en':
        activeLocaleWords = enLocale;
        break;

      case 'fa':
        activeLocaleWords = faLocale;
        break;

      default:
        break;
    }

    setState((prevState) => ({
      ...prevState,
      activeLocale: router.locale as tLocales,
      activeLocaleWords,
    }));
  }, [router.locale]);

  const initialContext: Ii18nContext = {
    ...state,
  };

  return (
    <I18nContext.Provider value={initialContext}>
      {children}
    </I18nContext.Provider>
  );
};

export const useI18Context = (): Ii18nContext => {
  const context = useContext(I18nContext);

  return context;
};

export default ContextI18nProvider;
