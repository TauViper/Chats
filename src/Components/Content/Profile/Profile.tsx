import React, {
  FC,
  // useContext,
  useEffect,
} from 'react';
import { Posts } from '../Posts/Posts';
import { HTTPS, PROFILE } from '../../Api/api';
// import { getUserProf } from '../../Store/action';
import { useDispatch } from 'react-redux';
// import { GetUserID } from '../../../App';
import { UserProfile } from './UserProfile';
import { useParams } from 'react-router-dom';
import { StoreState } from 'src/Components/Store';
import { ThunkDispatch } from 'redux-thunk';
import { getUserProf } from 'src/Components/Store/postReducer';
// import { Dispatch } from 'redux';

export const Profile: FC = () => {
  const { id } = useParams();
  // console.log({ id });
  // const profileID = useContext(GetUserID);

  const dispatch = useDispatch<ThunkDispatch<StoreState, void, any>>();
  useEffect(() => {
    if (id) {
      dispatch(getUserProf(HTTPS + PROFILE + `${id}`));
    }
  }, [dispatch, id]);

  return (
    <div>
      <UserProfile />
      <Posts />
    </div>
  );
};
