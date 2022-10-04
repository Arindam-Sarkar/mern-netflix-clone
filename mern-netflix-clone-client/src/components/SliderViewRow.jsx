import React, { useEffect, useRef, useState } from 'react'
import './sliderviewrow.css'
import SliderViewCard from './SliderViewCard'
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import axios from 'axios'

import { useSelector, useDispatch } from 'react-redux';
import { fetchMovieData } from '../reduxSlices/movieSlice';


const SliderViewRow = ({ movieSliceCode }) => {
  const [urlData, setUrlData] = useState([])
  const [urlDataFirstElement, SetUrlDataFirstElement] = useState(0)
  // const [arrowVisible, SetArrowVisible] = useState(false)

  const dispatch = useDispatch();

  const movie = useSelector((state) => state.movie.movies[movieSliceCode]);

  useEffect(() => {
    dispatch(fetchMovieData(movieSliceCode));
  }, [movieSliceCode])

  useEffect(() => {
    console.log(movie)
    setUrlData(movie.data)
  }, [movie.loaded])


  const handleLeftSlide = (e) => {
    e.preventDefault()
    let temp = urlDataFirstElement
    if (temp > 0) {
      temp--
      SetUrlDataFirstElement(temp)
    }
  }

  const handleRightSlide = (e) => {
    e.preventDefault()
    let temp = urlDataFirstElement
    if (temp < urlData.length - 5) {
      temp++
      SetUrlDataFirstElement(temp)
    }
  }

  return (
    <div className="svrMainComp">
      <div className="svrComp">

        <h1 className="svrH1"> {movie.genreTitle} </h1>

        <div className='svrAL' onClick={(e) => handleLeftSlide(e)}>
          <AiOutlineLeft />
        </div>

        <div className='svrSliderCont'>
          <div className='svrSlider'>
            {
              movie.loaded ?
                (urlData.slice(urlDataFirstElement).map((data, i) => <SliderViewCard key={data.id} cardData={data} />)) :
                (<h1 className="svrH1">Data Not Avilable</h1>)
            }
          </div>
        </div>

        <div className='svrAR' onClick={(e) => handleRightSlide(e)}>
          <AiOutlineRight />
        </div>

      </div >
    </div >
  )
}

export default SliderViewRow