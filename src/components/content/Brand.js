import React from 'react'
import { Typography } from '@material-ui/core'
import AssessmentRoundedIcon from '@material-ui/icons/AssessmentRounded';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  title: {
    display: 'flex',
    padding: theme.spacing(2),
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

export default function Brand() {
	const classes = useStyles()
	
	return (
		<div>
			<div className={classes.title}>
      	<AssessmentRoundedIcon color="primary" fontSize="large"/>
      	<Typography variant="h5">FinTracker</Typography>
     	</div>
		</div>
	)
}