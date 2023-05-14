import { FC } from 'react';

import classes from './Preloader.module.css';

export const Preloader: FC = () => {
  return (
    <div className={classes.loader}>
      <i className={classes.loaderEl}></i>
      <i className={classes.loaderEl}></i>
    </div>
  );
};
