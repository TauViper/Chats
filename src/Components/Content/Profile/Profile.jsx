import React from 'react';
import classes from './Profile.module.css';
import { Posts } from '../Posts/Posts';
export const Profile = () => {
  return (
    <div>
      <div className={classes.img}>
        <img src='https://piastrella.shop/upload/iblock/6ff/6ff48c465146c96ded027bfa32634877.jpg' />
      </div>
      <Posts />
    </div>
  );
};
