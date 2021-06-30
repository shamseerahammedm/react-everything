import React from 'react';
import './full-form.styles.scss';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { Field, Form, Formik, FormikProps } from 'formik';

const useStyles = makeStyles((theme) => ({
  gridContainer: {
    padding: '20px'
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },

}));

const MaterialUiFullForm = () => {

  const classes = useStyles();

  return (
    <div className="wrapper" style={{ margin: '50px' }}>
      <Grid container spacing={3} >
        <Grid item xs={6} >
          <form noValidate autoComplete="off">
            <Paper className={classes.gridContainer}>
              {/* <TextField  variant="Standard" /> */}
              <TextField fullWidth size="small" label="Name"/>
              <TextField
                fullWidth
                label="Address"
                multiline
                rows={4}
                defaultValue=""
                margin="dense"
              />
              <TextField fullWidth size="small" label="ZIP" margin="dense"/>
              <Select
                fullWidth
                labelId="demo-simple-select-label"
                value="10"
                // onChange={handleChange}
                margin="dense"
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </Paper>
          </form>
        </Grid>
      </Grid>
    </div>
  );
};

export default MaterialUiFullForm;
