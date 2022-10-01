import React from 'react'
import { BsArrowLeft } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import './player.css'

import video from "../assets/video.mp4";

const Player = ({ videoSrc }) => {

  const navigate = useNavigate()

  videoSrc = video

  return (
    <div className='playerMainContainer'>

      <div className='playerBackButton'>
        <BsArrowLeft
          className='playerBackArrow'
          onClick={() => navigate(-1)} />
      </div>

      <video src={videoSrc} autoPlay loop controls muted />

    </div>
  )
}

export default Player