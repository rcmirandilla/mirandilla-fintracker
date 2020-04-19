import React,{ useState, useEffect, useLayoutEffect } from 'react';
import Header from '../Layout/Header';
import BillListItem from '../Content/BillListItem';
import AddBillDialog from '../Content/AddBillDialog';
import Storage from '../../Utils/Storage';
import AddCircleRoundedIcon from '@material-ui/icons/AddCircleRounded';
import MoneyOffRoundedIcon from '@material-ui/icons/MoneyOffRounded';
import { makeStyles } from '@material-ui/core/styles';
import { List, Paper, Fab } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  billListHolder: {
  	marginLeft: theme.spacing(4),
  	marginBottom: theme.spacing(2),
  	marginRight: theme.spacing(6),
  },
  billList: {
  },
  icon: {
  	fontSize: 240,
    color: theme.palette.primary.main,
    margin: 'auto',
    marginTop: theme.spacing(7),
    display: 'flex',
  },
  fab: {
    position: 'fixed',
    bottom: theme.spacing(4),
    right: theme.spacing(4),
  },
}));

export default function BillPage(props){
  const classes = useStyles();
  const tabs = ["All", "Complete", "Incomplete"];
  const [open, setOpen] = useState(false);
  const [list, setList] = useState([]);
  const [edit, setEdit] = useState(false);
  const [editInfo,setEditInfo] = useState();

  const addItem = (info) => {
    const id = Date.now();
    setList(prevList => (
      [
        {
          id,
          ...info,
        },
        ...prevList,
      ]
    ));
  }

  const deleteItem = (id) => {
    setList(
      prevList => (prevList.filter((item) => item.id !== id)) 
    );
  };

  const clickEdit = (id) => {
    setOpen(true);
    setEdit(true);
    setEditInfo(list.find((item) => item.id === id));
  }

  const editItem = (newInfo) => {
    deleteItem(editInfo.id);
    addItem(newInfo);
    setEdit(false);
  };

  useLayoutEffect(() =>{
    const list = Storage.load("BPG") || [];
    setList(list);
  },[]);

  useEffect(() => Storage.save(list,"BPG"),[list]);

  return(
  	<div className={classes.root}>
  	  <Header title="Bills" tabs={tabs}/>
      {list.length === 0 ? <MoneyOffRoundedIcon className={classes.icon}/>
      :<Paper className={classes.billListHolder} variant="outlined">
        <List className={classes.billList}>
          {list.map((bill) => {
              return <BillListItem key={bill.id} data={bill} deleteItem={deleteItem} clickEdit={clickEdit} />
          })
        }
         </List>
      </Paper>
      }
      <Fab color="secondary" aria-label="add" className={classes.fab} onClick={() => setOpen(true)}>
        <AddCircleRoundedIcon />
      </Fab>
      <AddBillDialog 
      open={open} 
      handleClose={() => setOpen(false)}
      addBill={addItem}
      editInfo={editInfo}
      editItem={editItem}
      edit={edit}
      />
      </div>
  	);
}