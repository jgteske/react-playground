import { PaletteMode } from '@mui/material';
import { cyan, purple, deepOrange, grey } from '@mui/material/colors';

export const MuiCustomTheme = (mode: PaletteMode) => ({
  palette: {
    mode,
    ...(mode === 'light'
      ? {
          // palette values for light mode
          primary: cyan,
          secondary: purple,
          divider: purple[600],
          text: {
            primary: grey[900],
            secondary: grey[800],
          },
        }
      : {
          // palette values for dark mode
          primary: {
            main: '#006064',
          },
          divider: purple[600],
          background: {
            default: grey[900],
            paper: grey[900],
          },
          text: {
            primary: '#fff',
            secondary: grey[500],
          },
        }),
  },
});
