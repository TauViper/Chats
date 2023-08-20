import { zodResolver } from '@hookform/resolvers/zod';
import { ZodType, z } from 'zod';
import { useForm } from 'react-hook-form';
import { UserInfoSchema } from '../Store/types';
import { FC, useEffect } from 'react';
import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { useDispatch, useSelector } from 'react-redux';
import { putInfoUser } from '../Store/postReducer';
import { StoreState } from '../Store';

const userInfoSchema: ZodType<UserInfoSchema> = z.object({
  fullName: z.string().min(2),
  aboutMe: z.string(),
  lookingForAJob: z.boolean(),
  lookingForAJobDescription: z.string(),
});
type Props = {
  setIsEdit: (isEdit: boolean) => void;
};

export const InActiveForm: FC<Props> = ({ setIsEdit }) => {
  const UserProfileData = useSelector(
    (state: StoreState) => state.post.userProfile
  );

  const dispatch =
    useDispatch<ThunkDispatch<UserInfoSchema, void, AnyAction>>();

  const {
    register,
    formState: { errors, isValid },
    handleSubmit,

    reset,
    setFocus,
  } = useForm<UserInfoSchema>({
    resolver: zodResolver(userInfoSchema),
    mode: 'onBlur',
    defaultValues: {
      fullName: UserProfileData?.fullName,
      aboutMe: UserProfileData?.aboutMe,
      lookingForAJob: UserProfileData?.lookingForAJob,
      lookingForAJobDescription: UserProfileData?.lookingForAJobDescription,
    },
  });
  const onSubmit = (data: UserInfoSchema) => {
    console.log(data);
    setIsEdit(false);

    dispatch(putInfoUser(data));
    reset();
  };
  useEffect(() => {
    setFocus('fullName');
  }, [setFocus]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label style={{ color: '#072ba2' }}>
        <b>Name:</b>
        <input type='text' {...register('fullName')} autoComplete='on' />
        <div>{errors.fullName && <p>{errors.fullName.message}</p>}</div>
      </label>
      <br />
      <label style={{ color: '#072ba2', marginTop: '15px', display: 'flex' }}>
        <b>About me:</b>
        <textarea {...register('aboutMe')} />
      </label>
      <br />
      <label style={{ color: '#072ba2' }}>
        <b>Looking for job</b>
        <input type='checkbox' {...register('lookingForAJob')} />
      </label>
      <br />
      <label style={{ color: '#072ba2', marginTop: '15px', display: 'flex' }}>
        <b>Job Discription:</b>
        <textarea {...register('lookingForAJobDescription')} />
      </label>
      <button
        disabled={!isValid}
        type='submit'
        style={{
          cursor: 'pointer',
          margin: '15px 8px',
          width: '100px',
          height: '35px',
          backgroundColor: 'white',
        }}
      >
        Save
      </button>
    </form>
  );
};
