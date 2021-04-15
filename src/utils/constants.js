import { createMuiTheme } from '@material-ui/core';

export const muiTheme = createMuiTheme({
  palette :{
    primary: {
      // light: will be calculated from palette.primary.main,
      main: '#3A29B5',
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      // light: '#0066ff',
      main: '#1BC7DE',
      // dark: will be calculated from palette.secondary.main,
      // contrastText: '#ffcc00',
    },
  },
  typography : {
    xor : {
          
    }
  }
});
