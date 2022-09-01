import React from 'react';
// import classes from './Posts.module.css';
import { Post } from './Post/Post';
import { Data } from '../../Data';
import { AddPost } from '../../../AddPost';

AddPost('12', 'test');
const PostVal = Data.ProfileData.PostText.map((item) => (
  <Post key={item.key} message={item.message} />
));

export const Posts = () => {
  return (
    <div>
      <div>Ava + Discr</div>
      <div>My post</div>
      <div>
        <input />
        <button>Add Posts</button>
      </div>
      {PostVal}
    </div>
  );
};
