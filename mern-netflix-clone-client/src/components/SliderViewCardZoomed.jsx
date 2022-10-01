import React from 'react'
import './sliderViewCardZoomed.css'
import { IoPlayCircleSharp } from "react-icons/io5";
import { AiOutlinePlus } from "react-icons/ai";
import { RiThumbUpFill, RiThumbDownFill } from "react-icons/ri";
import { BiChevronDown } from "react-icons/bi";
import { BsCheck } from "react-icons/bs";

const SliderViewCardZoomed = ({ cardData }) => {

  return (
    <div className='svczImageCont'>
      <img className='svczImage'
        src={`https://image.tmdb.org/t/p/w500/${cardData?.backdrop_path}`}
        alt="No Image" />

      <h4 className='svczName'>{cardData.original_title}</h4>
      <div className='svczmCont'>

        <div className='svczmContLeft'>
          <IoPlayCircleSharp
            className='svczmIcons'
          // onFocus={ }
          />
          <RiThumbUpFill className='svczmIcons' />
          <RiThumbDownFill className='svczmIcons' />
          <AiOutlinePlus className='svczmIcons' />
        </div>

        <div className='svczmContRight'>
          <BiChevronDown className='svczmIcons' />
        </div>

      </div>
    </div>
  )
}

export default SliderViewCardZoomed