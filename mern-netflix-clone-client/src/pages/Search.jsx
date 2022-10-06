import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { MOVIEDB_API_KEY } from "../authKeys"

import SearchResRow from '../components/SearchResRow'
import Navbar from '../components/Navbar'
import './search.css'

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [searchPage, setSearchPage] = useState(1)
  const [pageScrolled, setPageScrolled] = useState(false)


  const [searchResult, setSearchResults] = useState({
    complete: false,
    result: []
  })

  const location = useLocation()

  useEffect(() => {
    setSearchTerm(location.search.slice(1))
  }, [location])


  useEffect(() => {
    const searchQuery = `https://api.themoviedb.org/3/search/movie?api_key=${MOVIEDB_API_KEY}&language=en-US&query=${searchTerm}&page=${searchPage}&include_adult=false`

    const searchMovieDb = async () => {
      try {
        const resp = await axios.get(searchQuery)
        setSearchResults(
          {
            complete: true,
            result: resp.data.results
          }
        )
      } catch (err) {
        // console.log(err);
      }
    }
    searchMovieDb()
  }, [searchTerm, searchPage])


  window.onscroll = () => {
    setPageScrolled(window.pageYOffset === 0 ? false : true);
  };

  // console.log(searchResult)
  return (
    <div >
      <Navbar pageScrolled={pageScrolled} />
      <div className='srchMainCont'>
        <div className='srchCont'>
          {(searchResult.complete === true &&
            searchResult.result[0] === undefined) ?
            (<h1 className='srchh1'>Data not Avilable</h1>) :
            (
              <>
                <SearchResRow resultArr={searchResult} rowNos={0} />
                <SearchResRow resultArr={searchResult} rowNos={1} />
                <SearchResRow resultArr={searchResult} rowNos={2} />
                <SearchResRow resultArr={searchResult} rowNos={3} />
              </>
            )

          }

        </div>

      </div>




    </div >
  )
}

export default Search