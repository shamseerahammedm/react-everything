import React from 'react'
import LinearProgress from '@material-ui/core/LinearProgress';
import Box from '@material-ui/core/Box';
import { ThemeProvider } from "@material-ui/core";
import { createMuiTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import './styles.scss';




const ProgressBar = ({progress, label}) => {
    return (
        <ThemeProvider theme={theme}>
            <NumberLinearProgress value={progress} label={label} />
        </ThemeProvider>
    )
}


const grey = "#c5c5c5";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#3A29B5"
    }
  },
  overrides: {
    MuiLinearProgress: {
      root: {
        borderRadius: 0,
        height: 24
      },
      bar1Determinate: {
        borderRadius: 0
      },
      colorPrimary: {
        backgroundColor: grey
      }
    }
  }
});

function NumberLinearProgress(props) {
  return (
    <Box display="flex" alignItems="center" className="progressBar">
      <Box width="100%" mr={1} className="progressWrapper">
        <LinearProgress variant="determinate" value={props.value} />
      </Box>
      <span className="progressText">
          <Typography variant="body2" color="textSecondary">{`${props.label} ( ${
            props.value
          }% )`}</Typography>
      </span>
    </Box>
  );
}




export default ProgressBar;