import React from 'react';
import classes from './Users.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { currentPage } from '../../Store/action';

export const pagesSize = 100;

export const PageCount = () => {
  const totalUsers = useSelector((state) => state.total);
  const currentPageState = useSelector((state) => state.currentPage);
  const dispatch = useDispatch();
  console.log(totalUsers, currentPageState);
  const usersPage = [];
  const usersDef = Math.ceil(totalUsers / pagesSize);

  for (let i = 1; i <= usersDef; i++) {
    usersPage.push(i);
  }
  // console.log(usersPage);
  const currentPageNum = (num) => {
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
