import { FC, useState } from 'react';
import classes from './Users.module.css';
import { useDispatch, useSelector } from 'react-redux';

import { StoreState } from 'src/Components/Store';
import { currentPage } from 'src/Components/Store/currentPageReducer';

const oneBlockItems = 10;
type Props = {
  usersOnPage: number;
};

export const PageCount: FC<Props> = ({ usersOnPage }) => {
  const totalUsers = useSelector((state: StoreState) => state.total);

  const currentPageState = useSelector(
    (state: StoreState) => state.currentPage
  );
  const dispatch = useDispatch();

  const usersPage: Array<number> = [];
  const usersDef: number = Math.ceil(totalUsers / usersOnPage);

  const itemBlock: number = Math.ceil(usersDef / oneBlockItems);
  const [portionItems, setPosionItems] = useState(1);
  const leftside = (portionItems - 1) * oneBlockItems + 1;
  const rightSize = portionItems * oneBlockItems;
  console.log(itemBlock);

  for (let i = 1; i <= usersDef; i++) {
    usersPage.push(i);
  }

  const currentPageNum = (num: number) => {
    dispatch(currentPage(num));
  };
  return (
    <div style={{ marginBottom: '45px', marginLeft: '25px' }}>
      {portionItems > 1 && (
        <>
          <button onClick={() => setPosionItems(1)}>&laquo;</button>
          <button onClick={() => setPosionItems(portionItems - 1)}>
            Назад
          </button>
        </>
      )}
      {usersPage
        .filter((num) => num >= leftside && num <= rightSize)
        .map((num) => {
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
      {itemBlock > portionItems && (
        <>
          <button onClick={() => setPosionItems(portionItems + 1)}>
            Вперед
          </button>
          <button onClick={() => setPosionItems(itemBlock)}>&raquo;</button>
        </>
      )}
    </div>
  );
};
