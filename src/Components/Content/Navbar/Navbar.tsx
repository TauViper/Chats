import { FC } from 'react';
import classes from './Navbar.module.css';
import { NavLink } from 'react-router-dom';

export const Navbar: FC = () => {
  return (
    <div className={classes.nav}>
      <div>
        <NavLink
          to='/'
          className={({ isActive }) => (isActive ? classes.active : '')}
        >
          Home
        </NavLink>
      </div>
      <div>
        <NavLink
          to='/profile/'
          className={({ isActive }) => (isActive ? classes.active : '')}
        >
          Profile
        </NavLink>
      </div>
      <div>
        <NavLink
          to='/dialogs'
          className={({ isActive }) => (isActive ? classes.active : '')}
        >
          Messages
        </NavLink>
      </div>
      <div>
        <NavLink
          to='/users'
          className={({ isActive }) => (isActive ? classes.active : '')}
        >
          Users
        </NavLink>
      </div>
      <div>News</div>
      <div>Music</div>
      <div>Settings</div>
    </div>
  );
};