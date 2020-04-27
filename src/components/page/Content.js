import React from 'react'
import FloatingActionButton from '../button/FloatingActionButton'
import Overview from '../page/Overview'
import ResidentList from '../page/ResidentList'
import BillList from '../page/BillList'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles( (theme) => ({
	root: {
		margin: theme.spacing(4),
  },
}));
export default function Content(props) {
	const classes = useStyles();
	const { currentPage, billFunctions, data } = props
	
	return (
		<div className={classes.root} >
			{currentPage === "Home" ? <Overview addPayment={billFunctions.addPayment} deletePayment={billFunctions.deletePayment} data={data} />
			: currentPage === "Resident" ? <ResidentList data={data.residents}/>
			: <BillList billFunctions={billFunctions} data={data.bills} numOfResidents={data.residents.length}/>
			}
			<FloatingActionButton createBill={billFunctions.createBill}/>
		</div>
	)
}