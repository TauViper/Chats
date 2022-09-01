import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Dialogs.module.css';

export const DialogItem = (props) => {
  let path = '/dialogs/' + props.id;
  return (
    <div>
      <NavLink to={path} className={classes.item}>
        {props.name}
      </NavLink>
    </div>
  );
};
