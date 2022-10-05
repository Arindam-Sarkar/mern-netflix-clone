import React, { useState, useEffect } from 'react'
import './sliderViewCardZoomed.css'
import { IoPlayCircleSharp } from "react-icons/io5";
import { AiOutlinePlus } from "react-icons/ai";
import { RiThumbUpFill, RiThumbDownFill } from "react-icons/ri";
import { BiChevronDown } from "react-icons/bi";
import { BsCheck } from "react-icons/bs";

const SliderViewCardZoomed = ({ cardData, type }) => {
  const [title, setTitle] = useState('')
  const [iconFocussed, setIconFocussed] =
    useState([false, false, false, false, false])

  const iconFocussedHandler = (setLocation, setState) => {
    const iconFocussedTemp = [...iconFocussed]
    iconFocussedTemp[setLocation] = setState
    setIconFocussed(iconFocussedTemp)
  }

  useEffect(() => {
    if (type === "movie") {
      setTitle(cardData.original_title)
    } else if (type === "tv") {
      setTitle(cardData.original_name)
    }
  }, [cardData])

  return (
    < div className='svczImageCont' >

      {/* <video className='svczVideo'
        src={video} autoPlay loop muted /> */}

      <img className='svczVideo'
        src={`https://image.tmdb.org/t/p/w500/${cardData?.backdrop_path}`}
        alt="No Image" />

      <h4 className='svczName'>{title}</h4>
      <div className='svczmCont'>

        <div className='svczmContLeft'>

          <IoPlayCircleSharp
            onMouseEnter={() => iconFocussedHandler(0, true)}
            onMouseLeave={() => iconFocussedHandler(0, false)}
            className={iconFocussed[0] ?
              ('svczmIcons svczmIconsSelected') : ('svczmIcons')}
          />

          <RiThumbUpFill
            onMouseEnter={() => iconFocussedHandler(1, true)}
            onMouseLeave={() => iconFocussedHandler(1, false)}
            className={iconFocussed[1] ?
              ('svczmIcons svczmIconsSelected') : ('svczmIcons')}
          />

          <RiThumbDownFill
            onMouseEnter={() => iconFocussedHandler(2, true)}
            onMouseLeave={() => iconFocussedHandler(2, false)}
            className={iconFocussed[2] ?
              ('svczmIcons svczmIconsSelected') : ('svczmIcons')}
          />

          <AiOutlinePlus
            onMouseEnter={() => iconFocussedHandler(3, true)}
            onMouseLeave={() => iconFocussedHandler(3, false)}
            className={iconFocussed[3] ?
              ('svczmIcons svczmIconsSelected') : ('svczmIcons')}
          />
        </div>

        <div className='svczmContRight'>
          <BiChevronDown
            onMouseEnter={() => iconFocussedHandler(4, true)}
            onMouseLeave={() => iconFocussedHandler(4, false)}
            className={iconFocussed[4] ?
              ('svczmIcons svczmIconsSelected') : ('svczmIcons')}
          />
        </div>

      </div>
    </div >
  )
}

export default SliderViewCardZoomed