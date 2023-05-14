import React, { useContext, useEffect } from 'react';
import classes from './Users.module.css';
import { useDispatch, useSelector } from 'react-redux';
import {
  changeButton,
  getRes,
  getTotal,
  // showPreloader,
} from '../../Store/action';
import { PageCount } from './PagesCount';
import { COUNT, HTTPS, USER } from '../../Api/api';
import { Preloader } from '../Preloader/Preloader';
import ava from '../../../Assets/cOPpcB6.png';
import { NavLink } from 'react-router-dom';
import { GetUserID } from '../../../App';

export const FromUsersContext = () => {
  const stateUser = useSelector((state) => state.users.userItems);
  const showSpiner = useSelector((state) => state.users.isLoader);
  const currentPageState = useSelector((state) => state.currentPage);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRes(HTTPS + USER + `?page=${currentPageState}` + COUNT));
    dispatch(getTotal(HTTPS + USER));
  }, [dispatch, currentPageState]);

  const toggle = (id) => {
    dispatch(changeButton(id));
  };
  const { setUserId } = useContext(GetUserID);
  return (
    <div>
      <h1>Users</h1>
      <PageCount />
      {showSpiner ? (
        <Preloader />
      ) : (
        stateUser &&
        stateUser.map((item) => (
          <div key={item.id} className={classes.userContainer}>
            <div className={classes.userData}>
              <NavLink
                to='/Profile'
                onClick={() => {
                  setUserId(item.id);
                }}
              >
                <img
                  className={classes.userPhoto}
                  src={item.photos.small !== null ? item.photos.small : ava}
                  alt={item.name}
                />
              </NavLink>

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
        ))
      )}
    </div>
  );
};
