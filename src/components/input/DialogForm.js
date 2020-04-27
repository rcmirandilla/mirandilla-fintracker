import React, {useState} from 'react'
import BillForm from '../input/BillForm'
import UserForm from '../input/UserForm'
import { Dialog, DialogActions, DialogContent, DialogTitle, Button } from '@material-ui/core'
import PostAddRoundedIcon from '@material-ui/icons/PostAddRounded'

const INITIAL_STATE = {
	name: "",
	amount: null,
	month: "",
}

export default function DialogForm(props) {
	const { type, open, handleClose, init, action } = props
	const [info, setInfo] = useState(
		type === 'Create User' ? {username: "", password: "", iconURL: ""}
		:init ? {
			name: init.name, 
			amount: init.amount, 
			month: init.month
		} 
		: INITIAL_STATE)

	const getInfo = (data) => {
		setInfo(prevInfo => ({...prevInfo, ...data}))
	}

	const handleClick = () => {
		type === 'Create Bill' ? action(info.name, info.amount, info.month)
		: type === 'Edit Bill' ? action(init.id, info.name, info.amount, info.month)
		: action(info.username, info.password, info.iconURL)
		handleClose()
	}

	return (
		<div>
		<Dialog open={open} onClose={() => {handleClose()}} aria-labelledby="form-dialog-title">
			<DialogTitle  id="form-dialog-title"><PostAddRoundedIcon color="primary"/>
	    {type}
	    </DialogTitle>
	    <DialogContent>
	    	{ type === 'Create User' ? <UserForm info={info} getInfo={getInfo} />
	      : <BillForm info={info} getInfo={getInfo} />
	    	}
	    </DialogContent>
	    <DialogActions>
	      <Button onClick={() => { handleClose()}} color="primary">
	        Cancel
	      </Button>
	      <Button onClick={handleClick} color="primary">
	        { type === "Edit Bill" ? "Edit"
					: "Create"
	        }
	      </Button>
	    </DialogActions>
    </Dialog>
		</div>
	)
}