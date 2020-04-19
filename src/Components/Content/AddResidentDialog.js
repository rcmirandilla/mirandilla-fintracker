import React, {useState} from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, Button, TextField} from '@material-ui/core';
import PersonAddRoundedIcon from '@material-ui/icons/PersonAddRounded';

const INITIAL_STATE = {
	name: false,
  	email: false,
  	age: false,
  	birthday: false,
}

export default function AddResidentDialog(props){
  const { handleClose, open, addResident, editInfo, editItem, edit } = props;
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [birthday, setBirthday] = useState("");
  const [error, setError] = useState(INITIAL_STATE);

  const reset = () => {
	setId("");
  	setName("");
  	setEmail("");
  	setAge("");
  	setBirthday("");
  	setError(INITIAL_STATE);
  }

  const fill = () => {
	const {id,name,email,age,birthday} = editInfo;
	setId(id);
	setName(name);
	setEmail(email);
	setAge(age);
	setBirthday(birthday);
  }

  const check = (data) => (data ? false : true)

  const handleClick = () => {
  	if (name && email && age && birthday){
  		if (edit) {
  			editItem({id,name,email,age,birthday})
  		}
  		else{
  			addResident({name,email,age,birthday})
  		}
  		handleClose();
  	}
  	else{
  		setError({
  			name: check(name),
		  	email: check(email),
		  	age: check(age),
		  	birthday: check(birthday),
  		});
  	}
  }

  const handleEnter = () => {
	edit ? fill() : reset(); 
  }

  return(
  	<div>
    <Dialog id="form-dialog" open={open} onClose={() => {handleClose(); reset()}} onEntering={handleEnter}>
	    <DialogTitle  id="form-dialog-title"><PersonAddRoundedIcon color="primary"/>
	    {edit ? "Edit Resident" : "Add Resident"}
	    </DialogTitle>
	    <DialogContent>
	      <form>
	      <TextField
	        autoFocus
	        id="name"
	        label="Full Name"
	        fullWidth
	        onChange={(e) => setName(e.target.value)}
	        required
	        value={name}
	        error={error.name}
	      />
	      <TextField
	        id="email"
	        label="Email Address"
	        type="email"
	        fullWidth
	        margin="normal"
	        onChange={(e) => setEmail(e.target.value)}
	        required
	        value={email}
	        error={error.email}
	      />
	      <TextField
	        id="age"
	        label="Age"
	        type="number"
	        fullWidth
	        margin="normal"
	        InputLabelProps={{
		      shrink: true,
		    }}
		    onChange={(e) => setAge(e.target.value)}
		    required
		    value={age}
		    error={error.age}
	      />
	      <TextField
		    id="date"
		    label="Birthday"
		    type="date"
		    InputLabelProps={{
		      shrink: true,
		    }}
		    fullWidth
		    margin="normal"
		    onChange={(e) => setBirthday(e.target.value)}
		    required
		    value={birthday}
		    error={error.birthday}
		  />
		  </form>
	    </DialogContent>
	    <DialogActions>
	      <Button onClick={() => { handleClose()}} color="primary">
	        Cancel
	      </Button>
	      <Button onClick={handleClick} color="primary">
	        {edit ? "Edit" : "Add"}
	      </Button>
	    </DialogActions>
    </Dialog>
    </div>
    );
};