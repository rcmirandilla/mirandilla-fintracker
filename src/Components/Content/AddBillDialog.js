import React, {useState} from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, Button, TextField, InputAdornment} from '@material-ui/core';
import PostAddRoundedIcon from '@material-ui/icons/PostAddRounded';

const INITIAL_STATE = {
	name: false,
  	email: false,
  	age: false,
  	birthday: false,
}

export default function AddBillDialog(props){
  const { handleClose, open, addBill, editInfo, editItem, edit  } = props;
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [month, setMonth] = useState("");
  const [amount, setAmount] = useState("");
  const [error, setError] = useState(INITIAL_STATE);

  const reset = () => {
	setId("");
  	setName("");
  	setMonth("");
	setAmount("");
	setError(INITIAL_STATE);
  }

  const fill = () => {
	setId(editInfo.id);
  	setName(editInfo.name);
  	setMonth(editInfo.month);
  	setAmount(editInfo.amount);
  }

  const check = (data) => (data ? false : true)

  const handleClick = () => {
  	if (name && month && amount){
  		if (edit) {
  			editItem({id,name,month,amount})
  		}
  		else{
  			addBill({name,month,amount})
  		}
  		handleClose();
  	}
  	else{
  		setError({
  			name: check(name),
		  	month: check(month),
		  	amount: check(amount),
  		});
  	}
  }

  const handleEnter = () => {
	edit ? fill() : reset(); 
  }

  return(
    <Dialog open={open} onClose={() => {handleClose(); reset()}} onEntering={handleEnter} aria-labelledby="form-dialog-title">
	    <DialogTitle  id="form-dialog-title"><PostAddRoundedIcon color="primary"/>
	    {edit? "Edit Bill"
	    : "Add Bill"
		}
	    </DialogTitle>
	    <DialogContent>
	      <form>
	      <TextField
	        autoFocus
	        id="name"
	        label="Name"
			fullWidth
			value={name}
			onChange={(e) => setName(e.target.value)}
			error={error.name}
	      />
	      <TextField
	        label="Amount"
	        id="amount"
	        InputProps={{
	          startAdornment: <InputAdornment position="start">Php</InputAdornment>,
	        }}
	        fullWidth
			margin="normal"
			value={amount}
			onChange={(e) => setAmount(e.target.value)}
			error={error.amount}
          />
          <TextField
	        id="month"
	        label="Month"
	        fullWidth
			margin="normal"
			value={month}
			onChange={(e) => setMonth(e.target.value)}
			error={error.month}
	      />
		  </form>
	    </DialogContent>
	    <DialogActions>
	      <Button onClick={() => { handleClose();}} color="primary">
	        Cancel
	      </Button>
	      <Button onClick={handleClick} color="primary">
	        { edit ? "Edit"
			: "Add"
	        }
	      </Button>
	    </DialogActions>
    </Dialog>
    );
};