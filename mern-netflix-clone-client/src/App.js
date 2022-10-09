import './App.css';

import BackgroundImage from './components/BackgroundImage';
import { Route, Routes } from "react-router-dom";

import Navbar from './components/Navbar';
import Movies from './pages/Movies';
import TvShows from './pages/TvShows';
import Favourites from './pages/Favourites'
import Search from './pages/Search';

import Login from './pages/Login';
import Signup from './pages/Signup';
import Player from './pages/Player';




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
      </div>
    </>
  );
}

export default App;
