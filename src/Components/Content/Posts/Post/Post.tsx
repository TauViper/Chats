import { FC } from 'react';
import classes from './Post.module.css';

export type Props = {
  message: string;
};

export const Post: FC<Props> = (props) => {
  console.log(123);
  // const test = useMemo(() => {
  //   return props.message;
  // }, [props]);

  return (
    <div className={classes.ava}>
      <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQh91Bam1jGaTQwFi1dBsvsMAsvHxA8gfJlwg&usqp=CAU' />
      {props.message}
    </div>
  );
};
