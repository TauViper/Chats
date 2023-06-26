import { FC, useState } from 'react';
import { useSelector } from 'react-redux';
import { StoreState } from 'src/Components/Store';

export const UserProfile: FC = () => {
  const [isEdit, setIsEdit] = useState(false);

  const UserProfileData = useSelector(
    (state: StoreState) => state.post.userProfile
  );

  if (UserProfileData && Object.keys(UserProfileData).length !== 0) {
    return (
      <>
        <img
          src={UserProfileData.photos.small}
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
  }
  return null;
};
