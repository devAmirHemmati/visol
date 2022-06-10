import { useRouter } from 'next/router';
import {
  AllHTMLAttributes,
  createContext,
  FC,
  useContext,
  useEffect,
  useState,
} from 'react';
import { localStorageKeys } from '../../StorageKeys';
import {
  bluePurpleTheme,
  blueTheme,
  darkTheme,
  whiteBlueTheme,
  whitePurpleTheme,
} from '../../themes';
import ITheme from '../../themes/types';
import { IThemeContext, IThemeState, tThemesType } from './types';

export const initialState: IThemeState = {
  activeThemeType: 'white-purple',
  activeTheme: whitePurpleTheme,
};

const initialContext: IThemeContext = {
  ...initialState,
  handleChangeThemeType() {},
};

const ThemeContext = createContext<IThemeContext>(initialContext);

const ContextThemeProvider: FC<AllHTMLAttributes<HTMLElement>> = ({
  children,
}) => {
  const [state, setState] = useState<IThemeState>(initialState);

  const handleChangeThemeType = (activeThemeType: tThemesType) => {
    let activeTheme: ITheme = whitePurpleTheme;

    switch (activeThemeType) {
      case 'white-purple':
        activeTheme = whitePurpleTheme;
        break;

      case 'white-blue':
        activeTheme = whiteBlueTheme;
        break;

      case 'dark':
        activeTheme = darkTheme;
        break;

      case 'blue-purple':
        activeTheme = bluePurpleTheme;
        break;

      case 'blue':
        activeTheme = blueTheme;
        break;

      default:
        break;
    }

    setState((prevState) => ({
      ...prevState,
      activeThemeType,
      activeTheme,
    }));

    localStorage.setItem(localStorageKeys.theme, activeThemeType);
  };

  useEffect(() => {
    const storageTheme = localStorage.getItem(localStorageKeys.theme);

    if (typeof storageTheme !== 'string') return;

    switch (storageTheme as tThemesType) {
      case 'white-purple':
      case 'white-purple':
      case 'dark':
      case 'blue-purple':
      case 'blue':
        handleChangeThemeType(storageTheme as tThemesType);
        break;

      default:
        localStorage.removeItem(localStorageKeys.theme);
        break;
    }
  }, []);

  const initialContext: IThemeContext = {
    ...state,
    handleChangeThemeType,
  };

  return (
    <ThemeContext.Provider value={initialContext}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeContext = (): IThemeContext => {
  const context = useContext(ThemeContext);

  return context;
};

export default ContextThemeProvider;
