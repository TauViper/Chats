import React, { useEffect } from 'react';
import classes from './Users.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { changeButton, getRes, getTotal } from '../../Store/action';
import { PageCount } from './PagesCount';
import { COUNT, HTTPS, USER } from '../../Api/api';

export const Users = () => {
  const stateUser = useSelector((state) => state.users);
  const currentPageState = useSelector((state) => state.currentPage);
  const dispatch = useDispatch();

  // const getUsers = async (url) => {
  //   const res = await getApiResource(url);
  //   console.log(res.items);

  //   dispatch(getRes(res.items));
  // };

  useEffect(() => {
    dispatch(getRes(HTTPS + USER + `?page=${currentPageState}` + COUNT));
    dispatch(getTotal());
    // getUsers(HTTPS + USER);
  }, [dispatch, currentPageState]);

  const toggle = (id) => {
    dispatch(changeButton(id));
  };

  // const usersList = stateUser.items;
  return (
    <div>
      <h1>Users</h1>
      <PageCount />
      {stateUser &&
        stateUser.map((item) => (
          <div key={item.id} className={classes.userContainer}>
            <div className={classes.userData}>
              <img
                className={classes.userPhoto}
                src={item.photos.small}
                alt={item.name}
              />

              <button
                className={classes.userFallowedBtn}
                onClick={() => toggle(item.id)}
              >
                {item.followed ? 'Follow' : 'Unfollow'}
              </button>
            </div>
            <div className={classes.userInfo}>
              <div className={classes.userName}>
                <span>
                  User Name: <p>{item.name}</p>
                </span>
                <span>
                  User Status: <p>{item.status}</p>
                </span>
              </div>
              <div className={classes.userLocation}>
                <span>
                  User City: <p>{'item.location.city'}</p>
                </span>
                <span>
                  User Country: <p>{'item.location.country'}</p>
                </span>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};
