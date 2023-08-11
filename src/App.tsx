import { FC, Suspense, lazy } from 'react';
import './App.css';
import { Header } from './Components/Content/Header/Header';
import { Navbar } from './Components/Content/Navbar/Navbar';
// import { Profile } from './Components/Content/Profile/Profile';
import { Dialogs } from './Components/Content/Dialogs/Dialogs';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import { Users } from './Components/Content/Users/Users';
import { Home } from './Components/Content/Home/Home';
import { Login } from './Components/Content/Login/Login';
import { PrivateRoute } from './PrivateRoute/PrivateRoute';
// import { Preloader } from './Components/Content/Preloader/Preloader';
import { lazyLoad } from './HOC/LazyLoad';

const Profile = lazy(() =>
  import('./Components/Content/Profile/Profile').then(({ Profile }) => ({
    default: Profile,
  }))
);
const Users = lazy(() =>
  import('./Components/Content/Users/Users').then(({ Users }) => ({
    default: Users,
  }))
);

// const Profile = lazy(() =>
//   Promise.all([
//     import('./Components/Content/Profile/Profile').then((module) => ({
//       default: module.Profile,
//     })),
//     new Promise((resolve) => setTimeout(resolve, 1000)),
//   ]).then(([Profile]) => Profile)
// );

// const Users = lazy(() =>
//   Promise.all([
//     import('./Components/Content/Users/Users').then(({ Users }) => ({
//       default: Users,
//     })),
//     new Promise((resolve) => setTimeout(resolve, 1000)),
//   ]).then(([moduleExport]) => moduleExport)
// );

const LazyProfile = lazyLoad(Profile);

export const App: FC = () => {
  return (
    <BrowserRouter>
      <div className='App'>
        <Header />
        <Navbar />
        <div className='main'>
          <Routes>
            <Route path='/' element={<Home />} />

            <Route path='dialogs' element={<Dialogs />} />

            <Route path='login' element={<Login />} />

            <Route element={<PrivateRoute />}>
              <Route path='profile/:id?' element={<LazyProfile />} />
              <Route
                path='users'
                element={
                  <Suspense fallback={<div>Loading...</div>}>
                    <Users />
                  </Suspense>
                }
              />
            </Route>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};
