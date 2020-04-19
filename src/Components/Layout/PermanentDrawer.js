import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Drawer, Typography, Divider, List, ListItem, ListItemIcon, ListItemText, Box } from '@material-ui/core';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import PeopleAltRoundedIcon from '@material-ui/icons/PeopleAltRounded';
import ReceiptRoundedIcon from '@material-ui/icons/ReceiptRounded';
import AssessmentRoundedIcon from '@material-ui/icons/AssessmentRounded';

const drawerWidth = 240

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
  },
  drawerPaper: {
    width: drawerWidth,
    background: theme.palette.background.default,
  },
  title: {
    display: 'flex',
    padding: theme.spacing(3),
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

export default function PermanentDrawer(props){
  const classes = useStyles();
  const items = ['Home', 'Resident', 'Bill'];
  const { callBack } = props;

  return(
    <div>
      <Drawer 
      className={classes.drawer} 
      classes={{paper: classes.drawerPaper}}
      anchor="left" 
      variant="permanent"
      >
        <Box className={classes.title}>
          <AssessmentRoundedIcon color="primary" fontSize="large"/>
          <Typography variant="h5">FinTracker</Typography>
        </Box>
        <Divider />
        <List>
          {items.map((item, index) => (
            <ListItem key={item} button onClick={() => callBack(index)}>
              <ListItemIcon>
                {   index === 0 ? <HomeRoundedIcon color="primary"/>
                  : index === 1 ? <PeopleAltRoundedIcon color="primary"/>
                  : <ReceiptRoundedIcon color="primary"/>
                }
              </ListItemIcon>
              <ListItemText primary={item}/>
            </ListItem>
            ))
          }
        </List>
      </Drawer>
    </div>
    );
};