import React from 'react'
import { Card, CardContent, CardActions, Button, Typography, Avatar } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  card: {
    margin: theme.spacing(1),
    width: 200,
    textAlign: 'right',
    background: theme.palette.background.paper,
  },
  avatar: {
    margin: 'auto',
    marginBottom: theme.spacing(1),
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
  button: {
    marginBottom: theme.spacing(2),
    margin: 'auto',
  },
}));

export default function ResidentCard(props){
  const classes = useStyles()
  const { username, iconURL } = props.data
  
  return(
    <Card className={classes.card} variant="outlined">
      <CardContent>
        <Avatar alt={username} src={iconURL} className={classes.avatar}>
        </Avatar>
        <Typography align="center" variant="subtitle1">{username}</Typography>
      </CardContent>
      <CardActions >
        <Button className={classes.button} variant="contained" size="small" color="primary">View Bills</Button>
      </CardActions>
    </Card>
    );
}