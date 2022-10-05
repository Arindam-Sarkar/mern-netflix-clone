import React, { useState } from 'react'
import './sliderViewCard.css'
import SliderViewCardZoomed from './SliderViewCardZoomed'

const SliderViewCard = ({ cardData, type }) => {

  const [svcFocussed, setSvcFocussed] = useState(false)


  const svcFocussedHandler = (value) => {
    setSvcFocussed(value)
  }

  return (
    <>

      <div className='svcImageCont'
        onMouseEnter={() => svcFocussedHandler(true)}
        onMouseLeave={() => svcFocussedHandler(false)}
      >
        {svcFocussed ?
          (
            <>
              < SliderViewCardZoomed cardData={cardData} type={type} />
              <img className='svcImage'
                src={`https://image.tmdb.org/t/p/w500/${cardData?.backdrop_path}`}
                alt="No Image" />
            </>
          ) :
          (
            <>
              <img className='svcImage'
                src={`https://image.tmdb.org/t/p/w500/${cardData?.backdrop_path}`}
                alt="No Image" />
            </>
          )


        }




      </div>

    </>
  )
}

export default SliderViewCard