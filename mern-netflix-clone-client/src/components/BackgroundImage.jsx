import React from 'react'
import background from "../assets/login.jpg"
import "../components/backgroundImage.css"

const BackgroundImage = () => {
  return (
    <div className='bgStyle'>
      <img src={background} alt="" />

    </div>
  )
}

export default BackgroundImage