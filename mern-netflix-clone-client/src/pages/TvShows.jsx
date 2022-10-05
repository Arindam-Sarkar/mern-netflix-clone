import React, { useState } from 'react'
import MainMovie from '../components/MainMovie'
import Navbar from '../components/Navbar'
import SliderViewGroup from '../components/SliderViewGroup'

import './tvShows.css'

const TvShows = () => {
  const [pageScrolled, setPageScrolled] = useState(false)

  window.onscroll = () => {
    setPageScrolled(window.pageYOffset === 0 ? false : true);
    // return () => (window.onscroll = null);
  };

  return (
    <div className='tvShowsMainCont'>
      <Navbar pageScrolled={pageScrolled} />
      <MainMovie />
      <SliderViewGroup />
    </div>
  )
}

export default TvShows