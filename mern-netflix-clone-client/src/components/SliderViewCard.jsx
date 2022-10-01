import React, { useState } from 'react'
import './sliderViewCard.css'
import SliderViewCardZoomed from './SliderViewCardZoomed'

const SliderViewCard = ({ cardData }) => {

  const [svcFocussed, setSvcFocussed] = useState(false)

  return (
    <>

      <div className='svcImageCont'
        onMouseEnter={() => setSvcFocussed(true)}
        onMouseLeave={() => setSvcFocussed(false)}>

        {svcFocussed ?
          (<>
            < SliderViewCardZoomed cardData={cardData} />
            <img className='svcImage'
              src={`https://image.tmdb.org/t/p/w500/${cardData?.backdrop_path}`}
              alt="No Image" />
          </>) :
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