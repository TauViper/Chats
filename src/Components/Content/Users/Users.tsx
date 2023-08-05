import { FC, useEffect, useState } from 'react';
import classes from './Users.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { PageCount } from './PagesCount';
import { HTTPS, USER } from '../../Api/api';
import { Preloader } from '../Preloader/Preloader';
import ava from '../../../Assets/cOPpcB6.png';
import { NavLink } from 'react-router-dom';
import { StoreState } from 'src/Components/Store';
import { ThunkDispatch } from 'redux-thunk';
import { getTotalUser } from 'src/Components/Store/totalReducer';
import {
  deleteFollowed,
  getRes,
  postFollowed,
} from 'src/Components/Store/userReducer ';
import { AnyAction } from 'redux';
import { CountInputOnePage } from './CountInputOnePage';

export const Users: FC = () => {
  const [usersOnPage, setUsersOnPage] = useState(25);
  const stateUser = useSelector((state: StoreState) => state.users.userItems);
  const showSpiner = useSelector((state: StoreState) => state.users.isLoader);
  const currentPageState = useSelector(
    (state: StoreState) => state.currentPage
  );
  const dispatch = useDispatch<ThunkDispatch<StoreState, void, AnyAction>>();

  useEffect(() => {
    dispatch(
      getRes(
        HTTPS + USER + `?page=${currentPageState}` + `&count=${usersOnPage}`
      )
    );
    dispatch(getTotalUser(HTTPS + USER));
  }, [dispatch, currentPageState, usersOnPage]);

  const toggleFollowed = (id: number) => {
    dispatch(postFollowed(id));
  };
  const toggleUnFollowed = (id: number) => {
    dispatch(deleteFollowed(id));
  };

  return (
    <div>
      <h1>Users</h1>
      <CountInputOnePage
        usersOnPage={usersOnPage}
        setUsersOnPage={setUsersOnPage}
      />
      <PageCount usersOnPage={usersOnPage} />
      {showSpiner ? (
        <Preloader />
      ) : (
        stateUser &&
        stateUser.map((item) => (
          <div key={item.id} className={classes.userContainer}>
            <div className={classes.userData}>
              <NavLink to={`/Profile/${item.id}`}>
                <img
                  className={classes.userPhoto}
                  src={item.photos.small !== null ? item.photos.small : ava}
                  alt={item.name}
                />
              </NavLink>

              {item.followed ? (
                <button
                  className={classes.userFallowedBtn}
                  onClick={() => toggleUnFollowed(item.id)}
                >
                  Unfollowed
                </button>
              ) : (
                <button
                  className={classes.userFallowedBtn}
                  onClick={() => toggleFollowed(item.id)}
                >
                  Followed
                </button>
              )}
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
