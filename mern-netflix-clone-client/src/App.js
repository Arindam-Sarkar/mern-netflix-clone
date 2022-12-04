import './App.css';

import BackgroundImage from './components/BackgroundImage';
import { Route, Routes } from "react-router-dom";

import Movies from './pages/Movies';
import TvShows from './pages/TvShows';
import Favourites from './pages/Favourites'
import Search from './pages/Search';

import Login from './pages/Login';
import Signup from './pages/Signup';
import Player from './pages/Player';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {

  return (
    <>
      <div className="App">
        <Routes>
          <Route path='/' element={<Signup />} />
          <Route path='/movies' element={<Movies />} />
          <Route path='/tvShows' element={<TvShows />} />
          <Route path='/favourites' element={<Favourites />} />

          <Route path='/player' element={<Player />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/search' element={<Search />} />
        </Routes>

        <ToastContainer
          position="top-center"
          autoClose={500}
          hideProgressBar
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable={false}
          pauseOnHover
          theme="light" />
      </div>
    </>
  );
}

export default App;
