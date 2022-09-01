import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { App } from './App';
import { AddPost } from './AddPost';
import { Data } from './Components/Data';

AddPost('10','TEST123');
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <App Data={Data} />
  // {/*</React.StrictMode>*/}
);
