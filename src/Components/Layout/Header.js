import React from 'react';
import { Typography, Tabs, Tab } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import PeopleAltRoundedIcon from '@material-ui/icons/PeopleAltRounded';
import ReceiptRoundedIcon from '@material-ui/icons/ReceiptRounded';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'inherit',
    paddingTop: theme.spacing(3),
    paddingRight: theme.spacing(4),
    paddingLeft: theme.spacing(4),
    paddingBottom: theme.spacing(2),
    background: theme.palette.background.default,
    zIndex: 1,
  },
  titleHolder: {
    display: 'flex',
    alignItems: 'center',
  },
  title: {
    marginLeft: theme.spacing(1),
  },
}));

export default function Header(props){
  const classes = useStyles();
  const { title, tabs } = props;

  return(
    <div className={classes.root} >
      <div className={classes.titleHolder}>
      { title === "Residents" ? <PeopleAltRoundedIcon color="primary" fontSize="large"/>
        : <ReceiptRoundedIcon color="primary" fontSize="large"/>
      }
      
      <Typography className={classes.title} variant="h4" noWrap>
        {title}
      </Typography>

      </div>
      <Tabs value={0}>
        {tabs.map((tab,index) => {
            return <Tab key={index} label={tab} />
        })}
      </Tabs>
    </div>
    );
};