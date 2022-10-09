import React, { useState } from 'react'
import { useEffect } from 'react';
import { BsArrowLeft } from "react-icons/bs";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from '../components/Navbar';
import './player.css'

// import video from "../assets/video.mp4";

const Player = () => {
  const [mediaName, setMediaName] = useState('')
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    if (location.state.movieData.title) {
      setMediaName(location.state.movieData.title)
    } else if (location.state.movieData.name) {
      setMediaName(location.state.movieData.name)
    }
  }, [0])

  return (
    <>
      <Navbar parentPage={'Player'} />

      <div className='playerMainContainer'>
        <div className='playerBackButton'>
          <BsArrowLeft
            className='playerBackArrow'
            onClick={() => navigate(-1)} />
        </div>

        <div className='playerSrcDetailsCont'>
          <div className='playerSrcDetails'>

            <div className='playerSrvTitle'>
              Source Media Name : {mediaName.substring(0, 40)}   ...
            </div>

            <div className='playerSrvVideoState'>
              Video Source Unavilable
            </div>

            <div className='playerSrvVideoState'>
              Please press back arrow to go back
            </div>
          </div>
        </div>
        {/* <video src={videoSrc} autoPlay loop controls muted /> */}

      </div>

    </>
  )
}

export default Player