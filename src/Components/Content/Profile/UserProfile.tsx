import { FC, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StoreState } from 'src/Components/Store';
import { ProfileProps } from 'src/Components/Store/types';
import ava from '../../../Assets/cOPpcB6.png';
import { postFoto } from 'src/Components/Store/postReducer';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';

export const UserProfile: FC<ProfileProps> = ({ ...props }) => {
  const [isEdit, setIsEdit] = useState(false);
  const dispatch = useDispatch<ThunkDispatch<StoreState, void, AnyAction>>();
  const UserProfileData = useSelector(
    (state: StoreState) => state.post.userProfile
  );
  const handleAddFoto = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files != null) {
      const addFoto = e.target.files[0];
      dispatch(postFoto(addFoto));
    }
  };

  if (UserProfileData && Object.keys(UserProfileData).length !== 0) {
    if (UserProfileData.userId === props.loginId) {
      return (
        <>
          <img
            src={
              UserProfileData.photos.small !== null
                ? UserProfileData.photos.small
                : ava
            }
            alt='Small Photo'
            style={{ height: '150px', width: '150px' }}
          />
          <input type='file' onChange={handleAddFoto} />
          {isEdit ? (
            <div>
              <input
                placeholder={UserProfileData.aboutMe}
                type='text'
                autoFocus={true}
                onBlur={() => setIsEdit(false)}
              ></input>
            </div>
          ) : (
            <p onDoubleClick={() => setIsEdit(true)}>
              About me: <span>{UserProfileData.aboutMe}</span>
            </p>
          )}
        </>
      );
    } else {
      return (
        <>
          <img
            src={
              UserProfileData.photos.small !== null
                ? UserProfileData.photos.small
                : ava
            }
            alt='Small Photo'
            style={{ height: '150px', width: '150px' }}
          />

          <p>
            About me: <span>{UserProfileData.aboutMe}</span>
          </p>
        </>
      );
    }
  }
  return null;
};
