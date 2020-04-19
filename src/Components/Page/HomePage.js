import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography } from '@material-ui/core';
import AssessmentRoundedIcon from '@material-ui/icons/AssessmentRounded';

const useStyles = makeStyles((theme) => ({
  title: {
    display: 'flex',
    padding: theme.spacing(3),
    alignItems: 'center',
 	margin: 'auto',
  },
  icon: {
  	fontSize: 200,
  },
}));

export default function(){
  const classes = useStyles();

  return(
  	<Box className={classes.title}>
          <AssessmentRoundedIcon className={classes.icon} color="primary"/>
          <Typography variant="h1">FinTracker</Typography>
    </Box>
  	);
};