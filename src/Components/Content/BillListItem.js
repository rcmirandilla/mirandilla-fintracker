import React from 'react';
import { Divider, ListItem, ListItemAvatar, Avatar, ListItemText, ListItemSecondaryAction, IconButton, Typography } from '@material-ui/core';
import DeleteRoundedIcon from '@material-ui/icons/DeleteRounded';
import FastfoodRoundedIcon from '@material-ui/icons/FastfoodRounded';
import EditRoundedIcon from '@material-ui/icons/EditRounded';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	item: {
		background: theme.palette.background.paper,
	},
	infoHolder: {
		color: theme.palette.text.secondary,
	},
	info: {
	  marginRight: 5,
      marginLeft: 5,
	},
	infoStart: {
	  marginRight: 5,
	},
}));

export default function BillListItem(props){
  const {deleteItem, clickEdit, data} = props;
  const classes = useStyles();
  return(
    <div>
  	<ListItem variant="outlined" className={classes.item}>
      <ListItemAvatar>
        <Avatar>
          <FastfoodRoundedIcon />
        </Avatar>
      </ListItemAvatar>
      <ListItemText disableTypography>
      	<Typography variant="body1">{data.name}</Typography>
      	<Typography className={classes.infoHolder} variant="subtitle2">
      	  <span className={classes.infoStart}>{data.month}</span>/
          <span className={classes.info}>Php {data.amount}.00</span>
        </Typography>
      </ListItemText>
      <ListItemSecondaryAction>
      <IconButton onClick={() => clickEdit(data.id)} edge="end" aria-label="edit">
          <EditRoundedIcon />
        </IconButton>
        <IconButton onClick={() => deleteItem(data.id)} edge="end" aria-label="delete">
          <DeleteRoundedIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
    <Divider component="li" />
    </div>
	);
};