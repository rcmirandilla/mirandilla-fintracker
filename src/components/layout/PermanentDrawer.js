import React from 'react'
import UserAvatar from '../content/UserAvatar'
import LogoutButton from '../button/LogoutButton'
import Navigation from '../layout/Navigation'
import Brand from '../content/Brand'
import { Drawer, Divider } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const drawerWidth = 240

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
  },
  drawerPaper: {
    width: drawerWidth,
    background: theme.palette.background.paper,
  },
}));

export default function PermanentDrawer(props){
  const classes = useStyles()
  const { getPage, logout, user } = props
  
  return(
    <div>
      <Drawer 
      className={classes.drawer} 
      classes={{paper: classes.drawerPaper}}
      anchor="left" 
      variant="permanent"
      >
        {/*Brand*/}
        <Brand />
        <Divider />
        {/*User Avatar*/}
        <UserAvatar user={user}/>
        <Divider />
        {/*Navigation*/}
        <Navigation getPage={getPage}/>
        {/*Logout Button*/}
        <LogoutButton logout={logout}/>
      </Drawer>
    </div>
    );
};