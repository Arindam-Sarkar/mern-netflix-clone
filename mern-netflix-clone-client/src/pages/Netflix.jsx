import React from 'react'
import MainMovie from '../components/MainMovie'
import Navbar from '../components/Navbar'
import SliderViewGroup from '../components/SliderViewGroup'

import './netflix.css'



const Netflix = () => {

  return (
    <div className='netflixMainCont'>
      <MainMovie />
      <Navbar />


      <SliderViewGroup />


    </div>
  )
}

export default Netflix