import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { App } from './App';
import { Provider } from 'react-redux';
import { persistor, store } from './Components/Store';
import { PersistGate } from 'redux-persist/integration/react';
import { Preloader } from './Components/Content/Preloader/Preloader';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={<Preloader />} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);