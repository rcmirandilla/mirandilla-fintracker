import React, { useState, useEffect } from 'react'
import PermanentDrawer from '../layout/PermanentDrawer'
import Page from '../page/Page'
import * as api from '../../api'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    position: 'fixed',
    height: '100%',
    width: '100%',
    background: theme.palette.primary,
  },

}))

export default function Main(props) {
	const classes = useStyles()
  const { logout, user } = props
  const [currentPage, setCurrentPage] = useState("Home")
  const [residents, setResidents] = useState([])
  const [bills, setBills] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try{
        const { data: residents } = await api.getAllUsers()
        const { data: bills } = await api.getAllBills()
        setResidents(residents.data)
        setBills(bills.data)
      }catch(error){
        alert(error.response.data.data.message)
      }
    }
    fetchData()
  }, [])

  const addPayment = async (billId, userId) => {
    try{
      const { data: bill } = await api.addPayment(billId,userId)
      setBills(prevBills => {
        const temp = [...prevBills]
        const i = prevBills.findIndex((bill) => bill.id === billId)
        return (temp.fill({...bill.data},i,i+1))
      })
    }catch(error){
      alert(error.response.data.data.message)
    }
  }

  const createBill = async (name, amount, month) => {
    try{
      const { data:bill } = await api.createBill(name,amount,month)
      setBills(prevBills => ([...prevBills,{...bill.data}, ]))
    }catch(error){
      alert(error.response.data.data.message)
    }
  }

  const deleteBill = async (billId) => {
    try{
      console.log(billId)
      await api.deleteBill(billId)
      setBills(prevBills => (prevBills.filter((bill) => bill.id !== billId)))
    }catch(error){
      alert(error.response.data.data.message)
    }
  }

  const deletePayment = async (billId,userId) => {
    try{
      const { data:bill } = await api.deletePayment(billId,userId)
      setBills(prevBills => {
        const temp = [...prevBills]
        const i = prevBills.findIndex((bill) => bill.id === billId)
        return (temp.fill({...bill.data},i,i+1))
      })
    }catch(error){
      alert(error.response.data.data.message)
    }
  }

  const editBill = async (billId,name,amount,month) => {
    try{
      const { data:bill } = await api.editBill(billId,name,amount,month)
      setBills(prevBills => {
        const temp = [...prevBills]
        const i = prevBills.findIndex((bill) => bill.id === billId)
        return (temp.fill({...bill.data},i,i+1))
      })
    }catch(error){
      alert(error.response.data.data.message)
    }
  }

  const billFunctions = {addPayment,createBill,deleteBill,deletePayment,editBill}

	return (
		<div className={classes.root}>
			<PermanentDrawer getPage={(page) => setCurrentPage(page)} logout={logout} user={user} />
			<Page data={{residents, bills}} billFunctions={billFunctions} currentPage={currentPage}/>
		</div>
	)
}