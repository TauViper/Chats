import { FC } from 'react';
import { Post } from './Post/Post';
import { useSelector, useDispatch } from 'react-redux';
import { InputPost } from './Post/InputPost';
import { StoreState } from 'src/Components/Store';
import { addPost } from 'src/Components/Store/postReducer';
import { nanoid } from 'nanoid';

export const Posts: FC = () => {
  const posts = useSelector((state: StoreState) => state.post.userPosts);

  const dispatch = useDispatch();
  const handleClick = (message: string) => {
    dispatch(
      addPost({
        id: nanoid(),
        message,
      })
    );
  };
  return (
    <div>
      <InputPost onAdd={handleClick} />
      {posts.map((post) => (
        <Post key={post.id} message={post.message} />
      ))}
    </div>
  );
};
