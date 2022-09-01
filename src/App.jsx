import React from 'react';
import './App.css';
import { Header } from './Components/Header/Header';
import { Navbar } from './Components/Navbar/Navbar';
import { Content } from './Components/Content/Content';

export const App = () => {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Content />
    </div>
  );
};
