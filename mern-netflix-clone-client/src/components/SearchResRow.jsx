import React, { useState, useEffect } from 'react'
import './searchResRow.css'


const SearchResRow = ({ resultArr, rowNos }) => {
  const [rowData, SetRowData] = useState({ loaded: false, data: [] })

  useEffect(() => {
    if (resultArr.complete === true) {
      const initialVal = rowNos * 5;
      let arrTmp = []
      for (let i = initialVal; i < (initialVal + 5); i++) {
        arrTmp.push(resultArr.result[i])
      }
      SetRowData({ loaded: true, data: arrTmp })
    }
  }, [resultArr])




  console.log(rowData)
  return (
    <div className='srrMainCont'>
      <div>
        {
          (rowData.loaded === true) &&
          <div className='srrCont'>
            {
              rowData.data.map(data => {
                console.log(data);
                return (

                  <div className='srrRowItemCont'>
                    <img className='srrImage'
                      src={`https://image.tmdb.org/t/p/w500/${data.backdrop_path}`}
                      alt="No Image" />


                    <div className='srrRowItemtext'>
                      {data.title}
                    </div>

                  </div>
                )
              })
            }
          </div>
        }
      </div>
    </div>
  )
}

export default SearchResRow