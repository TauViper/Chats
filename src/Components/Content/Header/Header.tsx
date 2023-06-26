import { useEffect, FC } from 'react';
import classes from './Header.module.css';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
// import { authUser } from '../../Store/action';
import { AUTH, HTTPS } from '../../Api/api';
import { StoreState } from 'src/Components/Store';
import { ThunkDispatch } from 'redux-thunk';
import { authUser } from 'src/Components/Store/authReducer';
import { AnyAction } from 'redux';

export const Header: FC = () => {
  const loginData = useSelector((state: StoreState) => state.auth);

  const dispatch = useDispatch<ThunkDispatch<StoreState, void, AnyAction>>();

  useEffect(() => {
    dispatch(authUser(HTTPS + AUTH));
  }, [dispatch]);

  return (
    <>
      <div className={classes.header}>
        Header
        {loginData.isAuth ? (
          <NavLink className={classes.loginButton} to='/profile'>
            <p>{loginData.login}</p>
          </NavLink>
        ) : (
          <NavLink className={classes.loginButton} to='/login'>
            <p>Login</p>
          </NavLink>
        )}
      </div>
    </>
  );
};
