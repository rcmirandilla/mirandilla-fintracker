import React from 'react'
import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core'
import ExitToAppRoundedIcon from '@material-ui/icons/ExitToAppRounded'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		display: 'flex',
		alignItems: "flex-end",
		paddingBottom: theme.spacing(2),
	},
}))

export default function LogoutButton(props) {
	const classes = useStyles()
	return (
		<div className={classes.root} >
			<ListItem dense button onClick={() => props.logout()}>
        <ListItemIcon><ExitToAppRoundedIcon color="primary"/></ListItemIcon>
        <ListItemText primary="Logout" primaryTypographyProps={{variant: "button"}}/>
      </ListItem>
		</div>
	)
}