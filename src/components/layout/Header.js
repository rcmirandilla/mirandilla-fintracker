import React from 'react'
import { Typography } from '@material-ui/core'
import PeopleAltRoundedIcon from '@material-ui/icons/PeopleAltRounded'
import ReceiptRoundedIcon from '@material-ui/icons/ReceiptRounded'
import TableChartRoundedIcon from '@material-ui/icons/TableChartRounded'
import { makeStyles } from '@material-ui/core/styles'
const useStyles = makeStyles((theme) => ({
  root: {
    position: 'inherit',
    paddingTop: theme.spacing(3),
    paddingRight: theme.spacing(4),
    paddingLeft: theme.spacing(4),
    flexGrow: 1,
    zIndex: 1,
  },
  titleHolder: {
    display: 'flex',
    alignItems: 'center',
  },
  title: {
    marginLeft: theme.spacing(1),
  },
}));

export default function Header(props){
  const classes = useStyles()
  const { title } = props

  return(
    <div className={classes.root} >
      <div className={classes.titleHolder}>
      { title === "Home" ? <TableChartRoundedIcon color="primary" fontSize="large" />
        :title === "Resident" ? <PeopleAltRoundedIcon color="primary" fontSize="large"/>
        : <ReceiptRoundedIcon color="primary" fontSize="large"/>
      }
      
      <Typography className={classes.title} variant="h4" noWrap>
        { title === "Home" ? "Overview"
          : title
        }
      </Typography>

      </div>
    </div>
    );
};