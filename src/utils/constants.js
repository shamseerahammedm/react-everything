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

/* 
    Material ui theme configuration.
*/
export const theme = {
  palette: {
    common: {
      darkMain: '#34333B',
      darkLight: '#85848B',
      white: '#fff',
      primaryColor: '#47499C',
      primaryColorDark : '#3d3e86',
      primarySuperLight : '#E5E8F8',
      primaryGradient: `radial-gradient(
        59.09% 139.29% at 47.35% 148.21%,
        #615bea 0%,
        rgba(91, 46, 219, 0.72) 0.01%,
        rgba(150, 145, 252, 0) 100%
      ),
      radial-gradient(108.51% 134.21% at 13.48% 92.98%, #cd78ec 0%, #18b0e0 100%)`,
      secondaryGradient: 'radial-gradient(96% 155.84% at 4% 100%, #70ded6 0%, #3cb1ea 100%)',
      errorColor : '#EC1A3F',
      errorLight : '#FBEBEE',
      disabled : '#EDEDED',
      primaryColorLight : '#4B79D0',
      inputBorderRadius : '8px'
    },
    text: {
      primary: '#34333B',
      secondary: '#85848B'
    },
    error : {
      light : '#FBEBEE',
      main: '#EC1A3F',
    }
  },
  typography: {
    fontFamily: '"Poppins","Roboto", "Helvetica", "Arial", sans-serif ',
    h1: {
      fontFamily: '"Poppins","Roboto", "Helvetica", "Arial", sans-serif ',
      fontWeight: 600,
      fontSize: '36px',
      color : 'black'
    },
    h2: {
      fontFamily: '"Poppins","Roboto", "Helvetica", "Arial", sans-serif ',
      fontWeight: 700,
      fontSize: '20px',
      color : 'black'
    },
    body1: {
      fontFamily: '"Poppins","Roboto", "Helvetica", "Arial", sans-serif ',
      fontWeight: 400,
      fontSize: '14px',
      color : 'black',
    },
    subtitle1 : {
      fontFamily: '"Poppins","Roboto", "Helvetica", "Arial", sans-serif ',
      fontWeight: 600,
      fontSize: '16px',
      color : 'black'
    },
    subtitle2 : {
      fontFamily: '"Poppins","Roboto", "Helvetica", "Arial", sans-serif ',
      fontWeight: 700,
      fontSize: '18px',
      color : 'black'
    }
  },
};