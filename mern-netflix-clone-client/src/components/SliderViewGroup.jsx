import React from 'react'
import {
  MOVIE_SLICE_CODE_TOP_RATED, MOVIE_SLICE_CODE_ACTION,
  MOVIE_SLICE_CODE_ADVENTURE, MOVIE_SLICE_CODE_ANIMATION,
  MOVIE_SLICE_CODE_COMEDY, MOVIE_SLICE_CODE_CRIME,
  MOVIE_SLICE_CODE_DOCUMENTARY, MOVIE_SLICE_CODE_DRAMA,
  MOVIE_SLICE_CODE_FAMILY, MOVIE_SLICE_CODE_FANTASY,
  MOVIE_SLICE_CODE_HISTORY, MOVIE_SLICE_CODE_HORROR,
  MOVIE_SLICE_CODE_MUSIC, MOVIE_SLICE_CODE_MYSTERY,
  MOVIE_SLICE_CODE_ROMANCE, MOVIE_SLICE_CODE_SCIENCE_FICTION,
  MOVIE_SLICE_CODE_THRILLER, MOVIE_SLICE_CODE_TV_MOVIE,
  MOVIE_SLICE_CODE_WAR, MOVIE_SLICE_CODE_WESTERN
} from '../reduxSlices/movieSlice'
import './sliderviewgroup.css'
import SliderViewRow from './SliderViewRow'



const SliderViewGroup = () => {

  return (
    <div>
      <SliderViewRow movieSliceCode={MOVIE_SLICE_CODE_TOP_RATED} />
      <SliderViewRow movieSliceCode={MOVIE_SLICE_CODE_ACTION} />
      <SliderViewRow movieSliceCode={MOVIE_SLICE_CODE_ADVENTURE} />
      <SliderViewRow movieSliceCode={MOVIE_SLICE_CODE_COMEDY} />
      <SliderViewRow movieSliceCode={MOVIE_SLICE_CODE_HISTORY} />
      <SliderViewRow movieSliceCode={MOVIE_SLICE_CODE_DOCUMENTARY} />
      <SliderViewRow movieSliceCode={MOVIE_SLICE_CODE_DRAMA} />
      <SliderViewRow movieSliceCode={MOVIE_SLICE_CODE_FANTASY} />
      <SliderViewRow movieSliceCode={MOVIE_SLICE_CODE_ANIMATION} />
    </div>
  )
}

export default SliderViewGroup