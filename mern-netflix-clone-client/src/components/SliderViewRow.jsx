import React, { useEffect, useRef, useState } from 'react'
import './sliderviewrow.css'
import SliderViewCard from './SliderViewCard'
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import axios from 'axios'

const SliderViewRow = ({ title, reqUrl }) => {
  const [urlData, setUrlData] = useState([])
  const [urlDataReceived, setUrlDataReceived] = useState(false)
  const [urlDataFirstElement, SetUrlDataFirstElement] = useState(0)
  const [arrowVisible, SetArrowVisible] = useState(false)


  useEffect(() => {
    const fetchUrlData = async () => {

      try {
        const response = await axios.get(reqUrl)

        const responseArr = await response.data.results

        setUrlData(responseArr)
        setUrlDataReceived(true)
      } catch (err) {
        console.log(err)
      }
    }
    fetchUrlData()
  }, [reqUrl])

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

        <h1 className="svrH1"> {title} </h1>

        <div className='svrAL' onClick={(e) => handleLeftSlide(e)}>
          <AiOutlineLeft />
        </div>

        <div className='svrSliderCont'>
          <div className='svrSlider'>
            {
              urlDataReceived ?
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