import React, {useState, useEffect} from 'react'
import Main from '../layout/Main'
import LoginPanel from '../login/LoginPanel'
import Loading from '../scene/Loading'
import * as api from '../../api'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    position: 'fixed',
    height: '100%',
    width: '100%',
    background: theme.palette.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },

}))

export default function App(){
  const classes = useStyles()
  const [user, setUser] = useState(null)
  const [isGettingSession, setIsGettingSession] = useState(true)
  const [isLoggingIn, setIsLoggingIn] = useState(false)

  useEffect(() => {
    const fetchSession = async () =>{
      try{
        const {data:user} = await api.getSession()
        setUser(user.data)
        setIsGettingSession(false)
      }catch(error){
        alert(error.response.data.data.message)
      }
    }
    fetchSession()
  }, [])

  const login = async (username, password) => {
    setIsLoggingIn(true)
    try{
      const {data:user} = await api.login(username,password)
      setUser(user.data)
      console.log(user)
      setIsLoggingIn(false)
    }catch(error){
      setIsLoggingIn(false)
      alert(error.response.data.data.message)
    }
  }

  const logout = async () => {
    setIsLoggingIn(true)
    try{
      await api.logout()
      setUser(null)
      setIsLoggingIn(false)
    }catch(error){
      alert(error.response.data.data.message)
    }
  }

  return(
    <div className={classes.root}>
      {isGettingSession || isLoggingIn ? <Loading />
        : user ? <Main logout={logout} user={user}/> 
        : <LoginPanel login={login} /> 
      }
    </div>
  )
}