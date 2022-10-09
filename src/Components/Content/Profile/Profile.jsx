import React from 'react';
import classes from './Profile.module.css';
import { Posts } from '../Posts/Posts';
export const Profile = () => {
  return (
    <div>
      <div className={classes.img}>
        <img src='https://mobimg.b-cdn.net/v3/fetch/70/703e3aefd9500eff0f63294bc383ac2a.jpeg' />
      </div>
      <Posts />
    </div>
  );
};
