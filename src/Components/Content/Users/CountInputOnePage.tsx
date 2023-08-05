import { FC, useState } from 'react';
import classes from './Users.module.css';

type Props = {
  setUsersOnPage: (value: number) => void;
  usersOnPage: number;
};

export const CountInputOnePage: FC<Props> = ({
  usersOnPage,
  setUsersOnPage,
}) => {
  const count: number[] = [10, 25, 50, 100];
  const [inputCount, setInputCount] = useState<string>('');

  const handleClick = () => {
    setUsersOnPage(+inputCount);
    setInputCount('');
  };

  return (
    <>
      <label>
        Выберите количество пользователей на странице:
        {count.map((item) => (
          <span
            onClick={() => setUsersOnPage(item)}
            className={
              usersOnPage === item ? classes.isActive : classes.nonActive
            }
            key={item}
          >
            {item}
          </span>
        ))}
      </label>
      <br />
      <label>
        Введите свое количество пользователей(минимум 1, максимум 100):
        <input
          style={{ marginLeft: '15px' }}
          value={inputCount}
          onChange={(e) => setInputCount(e.target.value)}
        />
        <button onClick={handleClick}>Ok</button>
      </label>
    </>
  );
};
