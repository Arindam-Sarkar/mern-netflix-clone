import React, { useEffect, useRef, useState } from 'react'
import './sliderviewrow.css'
import SliderViewCard from './SliderViewCard'
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import axios from 'axios'

import { useSelector, useDispatch } from 'react-redux';
import { fetchMovieData, fetchTvShowData } from '../features/movie/movieSlice';


const SliderViewRow = ({ movieSliceCode, type }) => {
  const [urlData, setUrlData] = useState()
  const [urlDataLoaded, setUrlDataLoaded] = useState(false)
  const [urlDataFirstElement, SetUrlDataFirstElement] = useState(0)


  const dispatch = useDispatch();

  const movie = useSelector((state) => state.movie.movies[movieSliceCode]);
  const tvShow = useSelector((state) => state.movie.tvShows[movieSliceCode]);

  useEffect(() => {
    if (type === "movie") {
      dispatch(fetchMovieData(movieSliceCode));
    } else if (type === "tv") {
      dispatch(fetchTvShowData(movieSliceCode));
    }
  }, [movieSliceCode])

  useEffect(() => {
    if (type === "movie") {
      setUrlData(movie)
      setUrlDataLoaded(true)
      SetUrlDataFirstElement(0)
    }
  }, [movie.loaded])

  useEffect(() => {
    if (type === "tv") {
      setUrlData(tvShow)
      setUrlDataLoaded(true)
      SetUrlDataFirstElement(0)
    }
  }, [tvShow.loaded])


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
    if (temp < urlData?.data.length - 5) {
      temp++
      SetUrlDataFirstElement(temp)
    }
  }

  // console.log(urlData);
  return (
    <div className="svrMainComp">
      <div className="svrComp">

        <h1 className="svrH1"> {urlData?.genreTitle} </h1>

        <div className='svrAL' onClick={(e) => handleLeftSlide(e)}>
          <AiOutlineLeft />
        </div>

        <div className='svrSliderCont'>
          <div className='svrSlider'>
            {
              urlDataLoaded ?
                (urlData.data.slice(urlDataFirstElement).map((data, i) => <SliderViewCard key={data.id} cardData={data} type={type} />)) :
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