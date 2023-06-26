import { FC } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { StoreState } from 'src/Components/Store';

export const PrivateRoute: FC = () => {
  const loginData = useSelector((state: StoreState) => state.auth);
  return loginData.isAuth ? <Outlet /> : <Navigate to={'login'} />;
};
