import React from 'react'
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	formGridStyles: {
		padding: theme.spacing(3),
	},
	other: {
		padding: theme.spacing(5),
	},
}));


const GridContainer = ({ children, type }) => {
	const classes = useStyles();

	switch (type)
	{
		case 'form':
			return (
				<Grid className={classes.formGridStyles}>
					{children}
				</Grid>
			)

		case 'other':
			return (
				<Grid className={classes.other}>
					{children}
				</Grid>
			)
		default:
			return (
				<Grid className={classes.other}>
					{children}
				</Grid>
			)
	}


}

export default GridContainer;
