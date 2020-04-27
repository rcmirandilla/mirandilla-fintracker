import React, { useState } from 'react'
import DialogForm from '../input/DialogForm'
import { Divider, ListItem, ListItemAvatar, Avatar, ListItemText, ListItemSecondaryAction, IconButton, Typography } from '@material-ui/core'
import DeleteRoundedIcon from '@material-ui/icons/DeleteRounded'
import MonetizationOnRoundedIcon from '@material-ui/icons/MonetizationOnRounded'
import EditRoundedIcon from '@material-ui/icons/EditRounded'
import { makeStyles } from '@material-ui/core/styles'

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
}))

export default function BillListItem(props){
  const {deleteBill, editBill, data, numOfResidents} = props
  const classes = useStyles()
  const [open, setOpen] = useState(false)

  return(
    <div>
  	<ListItem variant="outlined" className={classes.item}>
      <ListItemAvatar>
        <Avatar>
          <MonetizationOnRoundedIcon />
        </Avatar>
      </ListItemAvatar>
      <ListItemText disableTypography>
      	<Typography variant="body1">{data.name}</Typography>
      	<Typography className={classes.infoHolder} variant="subtitle2">
      	  <span className={classes.infoStart}>{data.month}</span>/
          <span className={classes.info}>Php {data.amount}.00</span>/
          <span className={classes.info}>{numOfResidents - data.paid.length} unpaid residents</span>
        </Typography>
      </ListItemText>
      <ListItemSecondaryAction>
      <IconButton onClick={() => setOpen(true)} edge="end" aria-label="edit">
          <EditRoundedIcon />
        </IconButton>
        <IconButton onClick={() => deleteBill(data.id)} edge="end" aria-label="delete">
          <DeleteRoundedIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
    <Divider component="li" />
    <DialogForm type="Edit Bill" open={open} handleClose={() => setOpen(false)} action={editBill} init={data} />
    </div>
	);
};