import React from 'react';
import { Menu, MenuItem, ListItemIcon, IconButton, Typography } from '@material-ui/core';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import EditRoundedIcon from '@material-ui/icons/EditRounded';
import DeleteRoundedIcon from '@material-ui/icons/DeleteRounded';
import MoreVertIcon from '@material-ui/icons/MoreVert';

export default function MyMenu(props) {
  const { id, deleteItem, clickEdit } = props;
  
  return (
    <PopupState variant="popover" popupId="demo-popup-menu">
      {(popupState) => (
        <React.Fragment>
          <IconButton aria-label="Menu" {...bindTrigger(popupState)}>
            <MoreVertIcon />
          </IconButton>
          <Menu {...bindMenu(popupState)}>
            <MenuItem onClick={() => { popupState.close(); clickEdit(id)}}>
              <ListItemIcon>
                <EditRoundedIcon />
              </ListItemIcon>
              <Typography variant="inherit">Edit</Typography>
            </MenuItem>
            <MenuItem onClick={() => { popupState.close();deleteItem(id); }}>
              <ListItemIcon>
                <DeleteRoundedIcon />
              </ListItemIcon>
              <Typography variant="inherit">Delete</Typography>
            </MenuItem>
          </Menu>
        </React.Fragment>
      )}
    </PopupState>
  );
}