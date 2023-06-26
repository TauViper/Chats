import React, { FC, useEffect } from 'react';
import { Posts } from '../Posts/Posts';
import { HTTPS, PROFILE } from '../../Api/api';

import { useDispatch, useSelector } from 'react-redux';

import { UserProfile } from './UserProfile';
import { useParams } from 'react-router-dom';
import { StoreState } from 'src/Components/Store';
import { ThunkDispatch } from 'redux-thunk';
import { getUserProf } from 'src/Components/Store/postReducer';

export const Profile: FC = () => {
  const { id } = useParams();
  const loginData = useSelector((state: StoreState) => state.auth);

  const dispatch = useDispatch<ThunkDispatch<StoreState, void, any>>();

  const urlId = id || loginData.id;

  useEffect(() => {
    if (urlId) {
      dispatch(getUserProf(`${HTTPS}${PROFILE}${urlId}`));
    }
  }, [dispatch, urlId]);

  return (
    <div>
      <UserProfile />

      <Posts />
    </div>
  );
};
