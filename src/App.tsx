import { FC } from 'react';
import './App.css';
import { Header } from './Components/Content/Header/Header';
import { Navbar } from './Components/Content/Navbar/Navbar';
import { Profile } from './Components/Content/Profile/Profile';
import { Dialogs } from './Components/Content/Dialogs/Dialogs';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Users } from './Components/Content/Users/Users';
import { Home } from './Components/Content/Home/Home';
import { Login } from './Components/Content/Login/Login';
import { PrivateRoute } from './PrivateRoute/PrivateRoute';

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
              <Route path='profile/:id?' element={<Profile />} />
              <Route path='users' element={<Users />} />
            </Route>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};
