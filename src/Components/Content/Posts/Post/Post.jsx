import React from 'react';
import classes from './Post.module.css';
export const Post = (props) => {
  return (
    <div className={classes.ava}>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQh91Bam1jGaTQwFi1dBsvsMAsvHxA8gfJlwg&usqp=CAU" />
      {props.message}
    </div>
  );
};
