import { FC } from 'react';
import classes from './Dialogs.module.css';

type Props = {
  message: string;
};

export const Message: FC<Props> = (props) => {
  return <div className={classes.message}>{props.message}</div>;
};
