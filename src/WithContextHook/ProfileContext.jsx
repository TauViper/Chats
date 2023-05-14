import React, { useContext, useEffect } from 'react';
import classes from './Profile.module.css';
import { Posts } from '../Posts/Posts';
import { HTTPS, PROFILE } from '../../Api/api';
import { getUserProf } from '../../Store/action';
import { useDispatch } from 'react-redux';
import { GetUserID } from '../../../App';

export const ProfileContext = () => {
  const profileID = useContext(GetUserID);
  console.log(profileID.userID);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserProf(HTTPS + PROFILE + `${profileID.userID}`));
  }, [dispatch, profileID]);

  return (
    <div>
      <div className={classes.img}>
        <img src='https://piastrella.shop/upload/iblock/6ff/6ff48c465146c96ded027bfa32634877.jpg' />
      </div>
      <Posts />
    </div>
  );
};
