import { FC } from 'react';
import './App.css';
import { Header } from './Components/Content/Header/Header';
import { Navbar } from './Components/Content/Navbar/Navbar';
import { Profile } from './Components/Content/Profile/Profile';
import { Dialogs } from './Components/Content/Dialogs/Dialogs';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Users } from './Components/Content/Users/Users';
import { Home } from './Components/Content/Home/Home';
// export const GetUserID = createContext(0);

export const App: FC = () => {
  // const [userID, setUserId] = useState();
  return (
    <BrowserRouter>
      {/* <GetUserID.Provider value={{ userID, setUserId }}> */}
      <div className='App'>
        <Header />
        <Navbar />
        <div className='profile'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='profile/:id?' element={<Profile />} />
            <Route path='dialogs' element={<Dialogs />} />
            <Route path='users' element={<Users />} />
          </Routes>
        </div>
      </div>
      {/* </GetUserID.Provider> */}
    </BrowserRouter>
  );
};
