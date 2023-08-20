import { FC } from 'react';
import { useSelector } from 'react-redux';
import { StoreState } from '../Store';

export const UnActiveForm: FC = () => {
  const UserProfileData = useSelector(
    (state: StoreState) => state.post.userProfile
  );
  return UserProfileData === null ? (
    <></>
  ) : (
    <form>
      <p>
        <b>Name:</b> <span>{UserProfileData.fullName}</span>
      </p>
      <p>
        <b>About me:</b> <span>{UserProfileData.aboutMe}</span>
      </p>
      <p>
        <b>Looking for job:</b>
        {UserProfileData.lookingForAJob ? <span>Yes</span> : <span>No</span>}
      </p>

      <p>
        <b>Job Discription:</b>
        <span>{UserProfileData.lookingForAJobDescription}</span>
      </p>
    </form>
  );
};
