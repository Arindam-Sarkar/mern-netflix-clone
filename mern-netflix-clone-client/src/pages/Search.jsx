import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { MOVIEDB_API_KEY } from "../authKeys"
import { RiCheckboxBlankCircleFill } from "react-icons/ri";


import SearchResRow from '../components/SearchResRow'
import Navbar from '../components/Navbar'
import './search.css'

import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { saveUserAuth } from '../features/auth/authSlice.js'



const Search = ({ type }) => {
  const [searchTerm, setSearchTerm] = useState('')
  const [searchPage, setSearchPage] = useState(1)
  const [pageScrolled, setPageScrolled] = useState(false)
  const [mediaType, setMediaType] = useState('movie')

  const [movieStyle, setMovieStyle] = useState("srchColorSelected srchRadioItem")
  const [tvStyle, setTvStyle] = useState("srchRadioItem")

  const [searchResultMovie, setSearchResultMovie] = useState({ complete: false, result: [] })
  const [searchResultTv, setSearchResultTv] = useState({ complete: false, result: [] })

  const userAuth = useSelector((state) => state.auth.userAuth);
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    setSearchTerm(location.search.slice(1))
  }, [location])


  useEffect(() => {


    const searchQueryMovie = `https://api.themoviedb.org/3/search/movie?api_key=${MOVIEDB_API_KEY}&language=en-US&query=${searchTerm}&page=${searchPage}&include_adult=false`
    const searchQueryTv = `https://api.themoviedb.org/3/search/tv?api_key=${MOVIEDB_API_KEY}&language=en-US&query=${searchTerm}&page=${searchPage}&include_adult=false`


    const searchMovieData = async () => {
      try {
        const resp = await axios.get(searchQueryMovie)
        setSearchResultMovie({ complete: true, result: resp.data.results })
      } catch (err) {
        // console.log(err);
      }
    }

    const searchTvShowsData = async () => {
      try {
        const resp = await axios.get(searchQueryTv)
        setSearchResultTv({ complete: true, result: resp.data.results })
      } catch (err) {
        // console.log(err);
      }
    }


    searchMovieData()
    searchTvShowsData()
  }, [searchTerm, searchPage])


  useEffect(() => {
    if (!userAuth?._id) {
      navigate('/login')
    }
  }, [userAuth?._id])

  const radioButtonHandler = (value) => {
    // console.log("radioButtonHandler =", value)
    setMediaType(value)

    if (value === "movie") {
      setMovieStyle("srchRadioItem srchColorSelected")
      setTvStyle("srchRadioItem")
    } else if (value === "tv") {
      setMovieStyle("srchRadioItem")
      setTvStyle("srchRadioItem srchColorSelected")
    }
  }

  window.onscroll = () => {
    setPageScrolled(window.pageYOffset === 0 ? false : true);
  };


  return (
    <div >
      <Navbar pageScrolled={pageScrolled} parentPage={'Search'} />

      <div className='srchMainCont'>

        <div className='srchRadioCont'>
          <div className='srchRadioContInner'>

            <div className='srchRadioItemCont'>
              < RiCheckboxBlankCircleFill
                className={movieStyle}
                onClick={() => radioButtonHandler('movie')}
              />
              <label className='srchRadioLabel'> Movie</label>
            </div>

            <div className='srchRadioItemCont'>
              < RiCheckboxBlankCircleFill
                className={tvStyle}
                onClick={() => radioButtonHandler('tv')}
              />
              <label className='srchRadioLabel'>Tv Shows</label>
            </div>

          </div>
        </div>

        {
          (mediaType === "movie") ?
            (
              <div className='srchCont'>
                {(searchResultMovie.complete === true &&
                  searchResultMovie.result[0] === undefined) ?
                  (
                    <h1 className='srchh1'>Data not Avilable</h1>
                  ) :
                  (
                    <>
                      <SearchResRow resultArr={searchResultMovie} type={"movie"} />
                    </>
                  )
                }
              </div>
            ) :
            (
              <div className='srchCont'>
                {(searchResultTv.complete === true &&
                  searchResultTv.result[0] === undefined) ?
                  (
                    <h1 className='srchh1'>Data not Avilable</h1>
                  ) :
                  (
                    <>
                      <SearchResRow resultArr={searchResultTv} type={"tv"} />
                    </>
                  )
                }
              </div>
            )
        }




      </div>
    </div >
  )
}

export default Search