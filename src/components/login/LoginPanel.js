import React, { useState } from 'react'
import DialogForm from '../input/DialogForm'
import { Card, TextField, CardContent, CardHeader, CardActions, Button, Grow, Snackbar } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import * as api from '../../api'

const useStyles = makeStyles((theme) => ({
  card: {
    display: "flex",
    height: 320,
    padding: theme.spacing(4),
    flexDirection: "column",
  },
  cardAction: {
    display: "flex",
    justifyContent: "flex-end",
    marginTop: theme.spacing(3),
  },
}));

export default function LoginPanel(props) {
  const classes = useStyles()
  const { login } = props
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [open, setOpen] = useState(false)
  const [openSB, setOpenSB] = useState(false)

  const createUser = async (username,password,iconURL) => {
    try{
      await api.createUser(username,password,iconURL)
      setOpenSB(true)
      setOpen(false)
    }catch(error){
      alert(error.response.data.data.message)
    }
  }

  return (
    <div>
      <Grow in timeout={1000}>
      <Card raised className={classes.card}>
        <CardHeader title="Welcome"/>
        <CardContent>
          <TextField onChange={(e) => setUsername(e.target.value)} fullWidth autoFocus label="Username"	margin="normal"/>
          <TextField onChange={(e) => setPassword(e.target.value)} fullWidth label="Password"	type="password" margin="normal"/>
        </CardContent>
        <CardActions className={classes.cardAction}>
          <Button onClick={(e) => setOpen(true)} className={classes.button} color="primary" variant="contained" disableElevation>Create User</Button>
          <Button onClick={(e) => login(username,password)} className={classes.button} color="primary" variant="contained" disableElevation>Log in</Button>
        </CardActions>
      </Card>  
      </Grow>
      <DialogForm open={open} type="Create User" handleClose={() => setOpen(false)} action={createUser} />
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        open={openSB}
        autoHideDuration={6000}
        onClose={() => setOpenSB(false)}
        message="Successfully Created New User"
      />
    </div>
  );
}
