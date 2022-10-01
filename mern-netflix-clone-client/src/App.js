import './App.css';

import BackgroundImage from './components/BackgroundImage';
import { Route, Routes } from "react-router-dom";

import Login from './pages/Login';
import Signup from './pages/Signup';
import Netflix from './pages/Netflix'
import Player from './components/Player';
import video from "./assets/video.mp4"

function App() {

  return (
    <>
      <div className="App">
        <Routes>
          <Route path='/' element={<Signup />} />
          <Route path='/player' element={<Player />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/netflix' element={<Netflix />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
