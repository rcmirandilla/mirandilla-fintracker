import React from 'react'
import BillListItem from '../content/BillListItem'
import { List, Paper } from '@material-ui/core'
import MoneyOffRoundedIcon from '@material-ui/icons/MoneyOffRounded'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  billListHolder: {
  	marginLeft: theme.spacing(4),
  	marginBottom: theme.spacing(2),
  	marginRight: theme.spacing(6),
  },
  icon: {
  	fontSize: 240,
    color: theme.palette.primary.main,
    margin: 'auto',
    marginTop: theme.spacing(7),
    display: 'flex',
  },
}));

export default function BillList(props) {
	const classes = useStyles();
	const { data:bills, billFunctions, numOfResidents } = props
	return (
		<div>
			{bills.length === 0 ? <MoneyOffRoundedIcon className={classes.icon}/>
      :<Paper className={classes.billListHolder} variant="outlined">
        <List className={classes.billList}>
          {bills.map((bill) => {
              return <BillListItem key={bill.id} data={bill} deleteBill={billFunctions.deleteBill} editBill={billFunctions.editBill} numOfResidents={numOfResidents}/>
          })
        }
        </List>
      </Paper>
      }
		</div>
	)
}