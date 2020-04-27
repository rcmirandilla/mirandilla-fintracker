import React from 'react'
import ResidentCard from '../content/ResidentCard'
import EmojiPeopleRoundedIcon from '@material-ui/icons/EmojiPeopleRounded'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  cardList: {
  	display: 'flex',
  	flexWrap: 'wrap',
  	overflow: 'auto',
  	marginTop: theme.spacing(2),
  	marginLeft: theme.spacing(6),
  	marginBottom: theme.spacing(2),
  },
  icon: {
  	fontSize: 240,
  	color: theme.palette.primary.main,
  	margin: 'auto',
  	marginTop: theme.spacing(7),
  },
}));

export default function ResidentList(props) {
	const classes = useStyles()
	const { data:residents } = props
	return (
		<div className={classes.cardList}>
  	  	{ residents.length === 0 ? <EmojiPeopleRoundedIcon className={classes.icon}/>
  	  		: residents.map((resident) => {
  	  			return <ResidentCard key={resident.id} data={resident} />
          })
  	  	}
   	</div>
	)
}