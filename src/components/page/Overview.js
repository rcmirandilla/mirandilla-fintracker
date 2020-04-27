import React from 'react'
import { Table, TableCell, TableContainer, TableRow, TableHead, TableBody, Paper, Checkbox, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
  	maxHeight: 500
  },
});

export default function Overview(props) {
	const classes = useStyles();
	const { data, addPayment, deletePayment } = props
	
	const isChecked = (billId, residentId) => {
		const bill = data.bills.find((bill) => bill.id === billId)
		if(bill.paid.find((resident) => resident.id === residentId)) 
			return true
		else return false
	}

	const handleChange = (e, billId, residentId) => {
		if (e.target.checked){
			addPayment(billId,residentId)
		}else{
			deletePayment(billId,residentId)
		}
	}
	
	return (
		<Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table size="small" stickyHeader aria-label="sticky table">
          <TableHead>
	          <TableRow>
	          	<TableCell className={classes.cell} ></TableCell>
	          	{data.bills.map((bill) => (
	          		<TableCell key={bill.id} className={classes.cell} align="center">{bill.name}</TableCell>
	          	))}
	          </TableRow>
	        </TableHead>
          <TableBody>
            {data.residents.map((resident) => (
	            <TableRow key={resident.id} hover  >
	            	<TableCell align="center" className={classes.cell} >
	            		<Typography variant="body1">{resident.username}</Typography>
	            	</TableCell>
	            	{data.bills.map((bill) => (
	            		<TableCell key={bill.id} align="center" className={classes.cell} >
	            			<Checkbox checked={isChecked(bill.id,resident.id)} onChange={(e) => handleChange(e,bill.id,resident.id)} color="primary"/>
	            		</TableCell>
	            	))}
	            </TableRow>
	          ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
	)
}