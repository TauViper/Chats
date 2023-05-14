import { FC } from 'react';
import { useSelector } from 'react-redux';
import { StoreState } from 'src/Components/Store';
// import { StoreState } from 'src/Components/Store';

export const UserProfile: FC = () => {
  const UserProfileData = useSelector(
    (state: StoreState) => state.post.userProfile
  );
  // console.log(UserProfileData);
  if (UserProfileData && Object.keys(UserProfileData).length !== 0) {
    return (
      <>
        <img
          src={UserProfileData.photos.small}
          alt='Small Photo'
          style={{ width: '150px' }}
        />
        <p>
          About me: <span>{UserProfileData.aboutMe}</span>
        </p>
      </>
    );
  }
  return null;
};
