import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { MOVIEDB_API_KEY } from "../authKeys"

import SearchResRow from '../components/SearchResRow'
import Navbar from '../components/Navbar'
import './search.css'

import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { saveUserAuth } from '../features/auth/authSlice.js'



const Search = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [searchPage, setSearchPage] = useState(1)
  const [pageScrolled, setPageScrolled] = useState(false)

  const [searchResult, setSearchResults] = useState({
    complete: false,
    result: []
  })

  const userAuth = useSelector((state) => state.auth.userAuth);
  const navigate = useNavigate()

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


  useEffect(() => {
    if (!userAuth?._id) {
      navigate('/login')
    }
  }, [userAuth?._id])

  window.onscroll = () => {
    setPageScrolled(window.pageYOffset === 0 ? false : true);
  };

  return (
    <div >
      <Navbar pageScrolled={pageScrolled} parentPage={'Search'} />

      <div className='srchMainCont'>
        <div className='srchCont'>
          {(searchResult.complete === true &&
            searchResult.result[0] === undefined) ?
            (
              <h1 className='srchh1'>Data not Avilable</h1>
            ) :
            (
              <>
                <SearchResRow resultArr={searchResult} />
              </>
            )
          }
        </div>
      </div>
    </div >
  )
}

export default Search