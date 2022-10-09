import React, { useState, useEffect } from 'react'
import { IoPlayCircleSharp } from "react-icons/io5";
import { AiOutlinePlus, AiTwotoneHeart } from "react-icons/ai";
import { RiThumbUpFill, RiThumbDownFill } from "react-icons/ri";
import { BiChevronDown } from "react-icons/bi";
import { BsCheck } from "react-icons/bs";
import SliderViewCardZoomed from './SliderViewCardZoomed'
import './searchResRow.css'


const SearchResRow = ({ resultArr, type }) => {
  const [iconFocussed, setIconFocussed] = useState([false, false, false, false, false])
  const [rowData, SetRowData] = useState({ loaded: false, data: [] })


  const iconFocussedHandler = (setLocation, setState) => {
    const iconFocussedTemp = [...iconFocussed]

    iconFocussedTemp[setLocation] = setState
    setIconFocussed(iconFocussedTemp)
  }

  return (
    <>
      {
        (resultArr.complete == true) ? (<>
          <div className='srrMainCont'>

            <div className='srrFlexCont'>
              <div className='srrCont'>
                {
                  resultArr.result.map(data =>
                    <div className='srrItem' key={data.id}>
                      < SliderViewCardZoomed cardData={data} type={type} />
                    </div>
                  )
                }
              </div>
            </div>
          </div></>) : (<></>)
      }
    </>

  )
}

export default SearchResRow