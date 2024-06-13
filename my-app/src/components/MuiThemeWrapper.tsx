import React, { useState } from 'react';
import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import IconButton from '@mui/material/IconButton';
import CssBaseline from '@mui/material/CssBaseline';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { MuiCustomTheme } from './MuiCustomTheme';

interface MuiThemeWrapperProps {
  children: React.ReactNode;
}

const MuiThemeWrapper = ({ children }: MuiThemeWrapperProps) => {
  const isSystemDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const [themePaletteMode, setThemePaletteMode] = useState(
    isSystemDarkMode ? 'dark' : 'light'
  );

  const themePaletteModeContextProvider = React.useMemo(
    () => ({
      toggleThemePaletteMode: () => {
        setThemePaletteMode((prevMode) =>
          prevMode === 'light' ? 'dark' : 'light'
        );
      },
    }),
    []
  );

  /**
   * Use Default Theme as ColorPaletteMode
   */
  /*   const themeProvider = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: themePaletteMode === 'dark' ? 'dark' : 'light',
        },
      }),
    [themePaletteMode]
  ); */

  /**
   * Set Custom Theme as ColorPaletteMode
   */
  const themeProvider = React.useMemo(
    () =>
      createTheme(
        MuiCustomTheme(themePaletteMode === 'dark' ? 'dark' : 'light')
      ),
    [themePaletteMode]
  );

  return (
    <ThemePaletteModeContext.Provider value={themePaletteModeContextProvider}>
      <ThemeProvider theme={themeProvider}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemePaletteModeContext.Provider>
  );
};

const ThemePaletteModeContext = React.createContext({
  toggleThemePaletteMode: () => {},
});

export const ToggleThemePaletteMode = () => {
  const theme = useTheme();
  const themePaletteModeContext = React.useContext(ThemePaletteModeContext);
  return (
    <IconButton
      sx={{ ml: 1 }}
      onClick={themePaletteModeContext.toggleThemePaletteMode}
      color='inherit'>
      {theme.palette.mode === 'dark' ? (
        <Brightness7Icon />
      ) : (
        <Brightness4Icon />
      )}
    </IconButton>
  );
};

export default MuiThemeWrapper;
