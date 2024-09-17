import { createContext, FC, useContext, useEffect, useRef, useState } from "react";
import { Button } from "../ui-kit/button/button";

/* список тем */
const themesList = {
  light: 'light',
  dark: 'dark',
};

type Themes = keyof typeof themesList;

/* контекст темы */
const ThemeContext = createContext<
    {
      theme: Themes;
      setTheme: (theme: Themes) => void;
      themesList: { [key: string]: string };
    }
  | undefined
>(undefined);

/* хук смены темы через контекст */
const useTheme = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error(
      'You can use "useTheme" hook only within a <ThemeProvider> component.'
    );
  }

  return context;
};


function getTheme() : Themes {
  let theme = localStorage.getItem('theme');
  if (!theme) {
    localStorage.setItem('theme', 'light');
    theme = 'light';
  }
  return theme as Themes;
};

const Theme = (props: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<Themes>(getTheme);

  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
        themesList,
      }}
    >
      {props.children}
    </ThemeContext.Provider>
  );
};

type ThemeButtonProps = {
  className: string
}

const ThemeButton = ({className}: ThemeButtonProps) => {
  const { theme, setTheme } = useTheme();

  const handleSwitchTheme = () => {
    console.log('---', theme);
    
    if (theme === 'dark') {
      setTheme('light');
    } else {
      setTheme('dark');
    }
  };

  return (
    <div className={className} onClick={handleSwitchTheme}>
      <div className='' data-theme={theme} />
    </div>
  );
};

export { useTheme, ThemeButton };
export default Theme;