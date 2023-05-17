import { FC } from 'react';
import classes from './Users.module.css';
import { useDispatch, useSelector } from 'react-redux';

import { StoreState } from 'src/Components/Store';
import { currentPage } from 'src/Components/Store/currentPageReducer';

export const pagesSize = 100;

export const PageCount: FC = () => {
  const totalUsers = useSelector((state: StoreState) => state.total.total);

  const currentPageState = useSelector(
    (state: StoreState) => state.currentPage.pageCount
  );
  const dispatch = useDispatch();

  const usersPage = [];
  const usersDef = Math.ceil(totalUsers / pagesSize);

  for (let i = 1; i <= usersDef; i++) {
    usersPage.push(i);
  }

  const currentPageNum = (num: number) => {
    dispatch(currentPage(num));
  };
  return (
    <div style={{ marginBottom: '45px' }}>
      {usersPage.map((num) => {
        return (
          <span
            style={{ margin: '5px', cursor: 'pointer' }}
            className={currentPageState === num ? classes.isActive : ''}
            key={num}
            onClick={() => currentPageNum(num)}
          >
            {num}
          </span>
        );
      })}
    </div>
  );
};
