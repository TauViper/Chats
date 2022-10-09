import React from 'react';
import { Post } from './Post/Post';
import { useSelector, useDispatch } from 'react-redux';
import { ADD_POST } from '../../Store/action';
import { InputPost } from './Post/InputPost';

export const Posts = () => {
  const posts = useSelector((state) => state.post);
  const dispatch = useDispatch();
  const handleClick = (message) => {
    dispatch({
      type: ADD_POST,
      payload: {
        id: new Date(),
        message,
      },
    });
  };
  return (
    <div>
      <div>Ava + Description</div>
      <div>My post</div>
      <InputPost onAdd={handleClick} />
      {posts.map((post) => (
        <Post key={post.id} message={post.message} />
      ))}
    </div>
  );
};
