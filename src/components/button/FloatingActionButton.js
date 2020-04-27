import React, {useState} from 'react'
import DialogForm from '../input/DialogForm'
import { Fab } from '@material-ui/core'
import AddCircleRoundedIcon from '@material-ui/icons/AddCircleRounded'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  fab: {
    position: 'fixed',
    bottom: theme.spacing(4),
    right: theme.spacing(4),
  },
}))

export default function FloatingActionButton(props) {
	const classes = useStyles();
  const { createBill } = props
	const [open, setOpen] = useState(false)

	return (
		<div>
			<Fab color="secondary" aria-label="add" className={classes.fab} onClick={() => {setOpen(true)}}>
        <AddCircleRoundedIcon />
      </Fab>
      <DialogForm type="Create Bill" open={open} handleClose={() => setOpen(false)} action={createBill} />
		</div>
	)
}