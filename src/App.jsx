import React from 'react';
import './App.css';
import { Header } from './Components/Content/Header/Header';
import { Navbar } from './Components/Content/Navbar/Navbar';
import { Profile } from './Components/Content/Profile/Profile';
import { Dialogs } from './Components/Content/Dialogs/Dialogs';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export const App = () => {
  return (
    <BrowserRouter>
      <div className='App'>
        <Header />
        <Navbar />
        <div className='profile'>
          <Routes>
            <Route path='/' element={<Profile />} />
            <Route path='profile' element={<Profile />} />
            <Route path='dialogs' element={<Dialogs />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};
