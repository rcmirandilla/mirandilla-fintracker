import React,{ useState, useEffect, useLayoutEffect } from 'react';
import Header from '../Layout/Header';
import ResidentCard from '../Content/ResidentCard';
import Storage from '../../Utils/Storage';
import AddResidentDialog from '../Content/AddResidentDialog';
import { makeStyles } from '@material-ui/core/styles';
import EmojiPeopleRoundedIcon from '@material-ui/icons/EmojiPeopleRounded';
import AddCircleRoundedIcon from '@material-ui/icons/AddCircleRounded';
import { Fab } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
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
  fab: {
    position: 'fixed',
    bottom: theme.spacing(4),
    right: theme.spacing(4),
  },
}));

export default function ResidentPage(){

  const classes = useStyles();
  const tabs = ["All", "Active", "Inactive"];
  const [open, setOpen] = useState(false);
  const [list, setList] = useState([]);
  const [edit, setEdit] = useState(false);
  const [editInfo,setEditInfo] = useState({});

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
    const list = Storage.load("RPG") || [];
    setList(list);
  },[]);

  useEffect(() => Storage.save(list,"RPG"),[list]);
    

  return(
  	<div className={classes.root}>
  	  <Header title="Residents" tabs={tabs}/>
  	  <div className={classes.cardList}>
  	  	{ list.length === 0 ? <EmojiPeopleRoundedIcon className={classes.icon}/>
  	  		: list.map((resident) => {
  	  			return <ResidentCard key={resident.id} deleteItem={deleteItem} data={resident} clickEdit={clickEdit}/>
          })
  	  	}
   	  </div>
   	  <Fab id="fab"color="secondary" aria-label="add" className={classes.fab} onClick={() => setOpen(true)}>
        <AddCircleRoundedIcon />
      </Fab>
      <AddResidentDialog 
        open={open} 
        handleClose={() => setOpen(false)}
        addResident={addItem}
        editInfo={editInfo}
        editItem={editItem}
        edit={edit}
        />
  	</div>
  	);
}