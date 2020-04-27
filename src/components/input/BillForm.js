import React from 'react'
import { TextField, InputAdornment } from '@material-ui/core'

export default function BillForm(props) {
	const { info, getInfo } = props

	return (
		<div>
			<form>
	      <TextField
	        autoFocus
	        id="name"
	        label="Name"
					fullWidth
					value={info.name}
					onChange={(e) => getInfo({name: e.target.value})}
	      />
	      <TextField
	        label="Amount"
	        id="amount"
	        InputProps={{
	          startAdornment: <InputAdornment position="start">Php</InputAdornment>,
	        }}
	        fullWidth
					margin="normal"
					value={info.amount}
					onChange={(e) => getInfo({amount: e.target.value})}
          />
        <TextField
	        id="month"
	        label="Month"
	        fullWidth
					margin="normal"
					value={info.month}
					onChange={(e) => getInfo({month: e.target.value})}
	      />
		  </form>
		</div>
	)
}