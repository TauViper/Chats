import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Dialogs.module.css';

type Props = {
  id: string;
  name: string;
};

export const DialogItem: FC<Props> = (props) => {
  const path = '/dialogs/' + props.id;
  return (
    <div>
      <NavLink to={path} className={classes.item}>
        {props.name}
      </NavLink>
    </div>
  );
};
