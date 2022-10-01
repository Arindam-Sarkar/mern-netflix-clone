import React from 'react'
import './sliderviewgroup.css'
import SliderViewRow from './SliderViewRow'

import { MovieReqUrls, TvReqUrls } from '../utils/MovieTvReqUrls'


const SliderViewGroup = () => {

  return (
    <div>
      <SliderViewRow title={"TopRated"} reqUrl={MovieReqUrls.TopRated} />
      <SliderViewRow title={"Popular"} reqUrl={MovieReqUrls.Popular} />
    </div>
  )
}

export default SliderViewGroup