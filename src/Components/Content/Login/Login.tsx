import { FC } from 'react';
import { useForm } from 'react-hook-form';
import classes from './Login.module.css';
import { ZodType, z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { LoginSchema } from 'src/Components/Store/types';
import { userLogin } from 'src/Components/Store/authReducer';
import { useDispatch, useSelector } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import { StoreState } from 'src/Components/Store';
import { Navigate } from 'react-router-dom';

const userSchema: ZodType<LoginSchema> = z.object({
  email: z.string().email({ message: 'Не соотвествует формату почты' }),
  password: z
    .string()
    .min(4, { message: 'Пароль должен содержать минимум 3 символа' }),
  rememberMe: z.boolean(),
  captcha: z.string().optional(),
});

export const Login: FC = () => {
  const loginData = useSelector((state: StoreState) => state.auth.userAuth);
  const loginCaptcha = useSelector(
    (state: StoreState) => state.auth.captchaURL
  );
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm<LoginSchema>({
    resolver: zodResolver(userSchema),
    mode: 'onBlur',
  });

  const dispatch = useDispatch<ThunkDispatch<LoginSchema, void, AnyAction>>();

  const onSubmit = (data: LoginSchema) => {
    dispatch(userLogin(data));
    reset();
  };
  return loginData.isAuth || localStorage.auth_token ? (
    <Navigate to={'/profile'} />
  ) : (
    <>
      <h2>Login</h2>
      <form className={classes.formLogin} onSubmit={handleSubmit(onSubmit)}>
        <label style={{ color: '#072ba2' }}>
          Login:
          <input
            className={classes.inputData}
            type='email'
            {...register('email')}
          />
          <div>
            {errors.email && (
              <p className={classes.errorMessage}>{errors.email.message}</p>
            )}
          </div>
        </label>

        <label style={{ color: '#072ba2' }}>
          Password:
          <input
            className={classes.inputData}
            type='password'
            autoComplete='on'
            {...register('password')}
          />
          <div>
            {errors.password && (
              <p className={classes.errorMessage}>{errors.password.message}</p>
            )}
          </div>
        </label>
        <div className={classes.checkBoxContainer}>
          <input
            className={classes.inputCheckBox}
            type='checkbox'
            {...register('rememberMe')}
          />
          <span style={{ color: '#072ba2', marginLeft: '15px' }}>
            Remember me
          </span>
        </div>
        <center>
          {loginCaptcha && (
            <img src={loginCaptcha} alt='captcha' className={classes.captcha} />
          )}
        </center>
        {loginCaptcha && (
          <label style={{ color: '#072ba2' }}>
            Captcha:
            <input className={classes.inputData} {...register('captcha')} />
            <div>
              {errors.captcha && (
                <p className={classes.errorMessage}>{errors.captcha.message}</p>
              )}
            </div>
          </label>
        )}

        <button
          disabled={!isValid}
          type='submit'
          style={{
            cursor: 'pointer',
            margin: '15px 8px',
            width: '200px',
            height: '35px',
            backgroundColor: 'white',
          }}
        >
          Войти
        </button>
      </form>
    </>
  );
};
