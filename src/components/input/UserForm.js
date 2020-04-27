import React from 'react'
import { TextField } from '@material-ui/core'
export default function UserForm(props) {
	const { getInfo } = props

	return (
		<div>
			<form>
	      <TextField
	        autoFocus
	        id="username"
	        label="Username"
					fullWidth
					onChange={(e) => getInfo({username: e.target.value})}
	      />
	      <TextField
	        label="Password"
	        id="password"
	        type="password"
	        fullWidth
					margin="normal"
					onChange={(e) => getInfo({password: e.target.value})}
          />
        <TextField
	        id="iconURL"
	        label="Icon URL"
	        fullWidth
					margin="normal"
					onChange={(e) => getInfo({iconURL: e.target.value})}
	      />
		  </form>
		</div>
	)
}