import React from 'react';
import classes from './Profile.module.css';
import { Posts } from './Posts/Posts';
export const Profile = () => {
  return (
    <div>
      <div className={classes.img}>
        <img src="https://www.ghimprove.com/_blog/images/posts/hello-world/mountain.jpg" />
      </div>
      <Posts />
    </div>
  );
};
