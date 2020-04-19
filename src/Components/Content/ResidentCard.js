import React from 'react';
import { Card, CardContent, CardActions, Button, Typography, Avatar, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import MyMenu from '../Content/MyMenu';
const useStyles = makeStyles((theme) => ({
  card: {
    margin: theme.spacing(1),
    width: 300,
    textAlign: 'right',
    background: theme.palette.background.paper,
  },
  avatar: {
    margin: 'auto',
    marginBottom: theme.spacing(1),
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
  infoHolder: {
    marginTop: theme.spacing(7),
  },
  info: {
    display: 'flex',
    padding: theme.spacing(1),
    marginTop: theme.spacing(1),
  },
  data: {
    flexGrow: 1,
  },
  button: {
    marginBottom: theme.spacing(2),
    margin: 'auto',
  },
}));

export default function ResidentCard(props){
  const classes = useStyles();
  const { name, email, age, birthday, id} = props.data;
  const {deleteItem, clickEdit} = props;
  return(
    <Card className={classes.card} variant="outlined">
      <MyMenu id={id} deleteItem={deleteItem} clickEdit={clickEdit} />
      <CardContent>
        <Avatar alt={name} className={classes.avatar}>
        </Avatar>
        <Typography align="center" variant="subtitle1">{name}</Typography>
        <Typography align="center" variant="body2" color="textSecondary">{email}</Typography>
        <div className={classes.infoHolder}>
        <Paper className={classes.info} variant="outlined">
          <Typography variant="body2" color="textSecondary">Age:</Typography>
          <Typography variant="body2" align="right" color="textSecondary" className={classes.data}>{age}</Typography>
        </Paper>
        </div>
        <Paper className={classes.info} variant="outlined">
          <Typography variant="subtitle2" color="textSecondary">Birthday:</Typography>
          <Typography variant="subtitle2" align="right" color="textSecondary" className={classes.data}>{birthday}</Typography>
        </Paper>
      </CardContent>
      <CardActions >
        <Button className={classes.button} variant="contained" size="small" color="primary">View Profile</Button>
      </CardActions>
    </Card>
    );
}