import { FC } from 'react';
import classes from './Post.module.css';
import { useSelector } from 'react-redux';
import { StoreState } from 'src/Components/Store';

export type Props = {
  message: string;
};

export const Post: FC<Props> = (props) => {
  const postsFotoUser = useSelector(
    (state: StoreState) => state.post.userProfile
  );
  const src =
    postsFotoUser?.photos.small ||
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQh91Bam1jGaTQwFi1dBsvsMAsvHxA8gfJlwg&usqp=CAU';

  return (
    <div className={classes.ava}>
      <img src={src} />
      {props.message}
    </div>
  );
};
