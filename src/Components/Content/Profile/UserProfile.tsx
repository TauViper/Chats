import { FC, useState } from 'react';
import { useSelector } from 'react-redux';
import { StoreState } from 'src/Components/Store';
import { ProfileProps } from 'src/Components/Store/types';
import ava from '../../../Assets/cOPpcB6.png';

export const UserProfile: FC<ProfileProps> = ({ ...props }) => {
  const [isEdit, setIsEdit] = useState(false);

  const UserProfileData = useSelector(
    (state: StoreState) => state.post.userProfile
  );

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
