import React from 'react'
import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core'
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import PeopleAltRoundedIcon from '@material-ui/icons/PeopleAltRounded';
import ReceiptRoundedIcon from '@material-ui/icons/ReceiptRounded';

export default function Navigation(props) {
	const navigation = ['Home', 'Resident', 'Bill']
	const {getPage} = props
	return (
		<div>
			<List>
	      {navigation.map((item, index) => (
	        <ListItem dense key={item} button onClick={() => {getPage(navigation[index])}}>
	          <ListItemIcon>
	            {   index === 0 ? <HomeRoundedIcon color="primary"/>
	              : index === 1 ? <PeopleAltRoundedIcon color="primary"/>
	              : <ReceiptRoundedIcon color="primary"/>
	            }
	          </ListItemIcon>
	          <ListItemText primary={item} primaryTypographyProps={{variant: "button"}}/>
	        </ListItem>
	        ))
	      }
	    </List>
		</div>
	)
}