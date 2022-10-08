import React, { useState, useEffect } from 'react'
import './sliderViewCardZoomed.css'
import { IoPlayCircleSharp } from "react-icons/io5";
import { AiOutlinePlus, AiTwotoneHeart } from "react-icons/ai";
import { RiThumbUpFill, RiThumbDownFill } from "react-icons/ri";
import { BiChevronDown } from "react-icons/bi";
import { BsCheck } from "react-icons/bs";

import { useSelector, useDispatch } from 'react-redux';
import { saveUserAuth } from '../features/auth/authSlice.js'
import {
  getUserFavourites,
  addUserFavourites,
  removeUserFavourites
} from '../features/userData/userDataSlice';

const SliderViewCardZoomed = ({ cardData, type }) => {
  const [title, setTitle] = useState('')
  const [iconFocussed, setIconFocussed] = useState([false, false, false, false, false])

  const userAuth = useSelector((state) => state.auth.userAuth);
  const userFavourites = useSelector((state) => state.userData.userFavourites);
  const dispatch = useDispatch()

  useEffect(() => {
    if (type === "movie") {
      setTitle(cardData.title)
    } else if (type === "tv") {
      setTitle(cardData.name)
    }
  }, [cardData])

  const iconFocussedHandler = (setLocation, setState) => {
    const iconFocussedTemp = [...iconFocussed]
    iconFocussedTemp[setLocation] = setState
    setIconFocussed(iconFocussedTemp)
  }


  const addToFavouritesHandler = (e) => {
    e.preventDefault()
    dispatch(addUserFavourites({
      userId: userAuth._id,
      movieId: cardData.id
    }))
  }


  const favStyleClassNameHandler = () => {
    let tmpStr = ""

    if (userFavourites.includes(cardData.id) === true) {
      tmpStr = 'svczmIcons svczmIconsFavourite'
      // setFavIconClassStyle(tmpStr)
    } else {
      tmpStr = (iconFocussed[3] ?
        ('svczmIcons svczmIconsSelected') : ('svczmIcons'))
      // setFavIconClassStyle(tmpStr)
    }

    return (tmpStr)
  }


  return (
    < div className='svczImageCont' >

      {/* <video className='svczVideo'
        src={video} autoPlay loop muted /> */}

      <img className='svczVideo'
        src={`https://image.tmdb.org/t/p/w500/${cardData?.backdrop_path}`}
        alt="No Image" />

      <h4 className='svczName'>{title.substring(0, 45)} ...</h4>
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

          <AiTwotoneHeart
            onMouseEnter={() => iconFocussedHandler(3, true)}
            onMouseLeave={() => iconFocussedHandler(3, false)}
            onClick={(e) => addToFavouritesHandler(e)}
            className={favStyleClassNameHandler()}
          />
        </div>
      </div>
    </div >
  )
}

export default SliderViewCardZoomed