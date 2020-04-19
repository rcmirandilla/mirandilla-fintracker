import React, {useState} from 'react';
import PermanentDrawer from '../Layout/PermanentDrawer';
import HomePage from '../Page/HomePage';
import ResidentPage from '../Page/ResidentPage';
import BillPage from '../Page/BillPage';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    position: 'fixed',
    height: '100%',
    width: '100%',
    overflow: 'auto',
    background: theme.palette.background.default
  },

}));

export default function App(){
  const classes = useStyles();
  const [value, setValue] = useState(0);

  return(
      <div className={classes.root}>
        <PermanentDrawer callBack={(dataFromChild) => setValue(dataFromChild)}/>
        {value === 0 ? <HomePage />
          : value === 1 ? <ResidentPage />
          : <BillPage bills={bills}/>
        }
      </div>
    );
};

const bills = [
  {
    "id": 1,
    "name": "Food",
    "month": "April",
    "amount": 60,
  },
  {
    "id": 2,
    "name": "Transportation",
    "month": "March",
    "amount": 30,
  },
  {
    "id": 3,
    "name": "Org Fees",
    "month": "March",
    "amount": 80,
  },
];