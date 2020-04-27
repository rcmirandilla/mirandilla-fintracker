import React from 'react'
import Header from '../layout/Header'
import Content from '../page/Content'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root: {
  	width: '100%',
  	height: '100%',
  	overflow: 'auto',
  	background: theme.palette.background.default,
  },
}))

const tabs = ["All", "Active", "Inactive"]

export default function Page(props) {
	const classes = useStyles()
	const { currentPage, billFunctions, data } = props

	return (
		<div className={classes.root}>
			<Header title={currentPage} tabs={tabs} />
			<Content data={data} billFunctions={billFunctions} currentPage={currentPage} />
		</div>
	)
}