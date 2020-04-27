import React from 'react'
import { Avatar, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
  },
  avatar: {
  	marginBottom: theme.spacing(1),
  },

}))

export default function UserAvatar(props) {
	const classes = useStyles()
  const { user } = props
	return (
		<div className={classes.root}>
			<Avatar className={classes.avatar} alt={user.username} src={user.iconURL}></Avatar>
			<Typography variant="subtitle1">Hello, {user.username}</Typography>
		</div>
	)
}