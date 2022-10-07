import React, { useEffect, useRef, useState } from 'react'
import './navbar.css'
import logo from '../assets/logo.png'
import { getAuth, signOut } from "firebase/auth";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { RiLogoutCircleRLine } from "react-icons/ri"

import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { saveUserAuth, deleteUserAuth } from '../features/auth/authSlice.js'


const navbarLinks = [
  // { name: "Home", path: "/" },
  { name: "Movies", path: "/movies" },
  { name: "TV Shows", path: "/tvShows" },
  { name: "Favourites", path: "/favourites" },
]


const Navbar = ({ pageScrolled, parentPage }) => {
  const [user, setUser] = useState({})
  const [showSearch, setShowSearch] = useState(false)
  const [searchWarning, setSearchWarning] = useState({ alert: false, msg: "" })
  const [inputHover, setInputHover] = useState(false);
  const [searchIp, setSearchIp] = useState('')

  const userAuth = useSelector((state) => state.auth.userAuth);

  const searchRef = useRef()
  const navigate = useNavigate()
  const dispatch = useDispatch()


  // console.log(userAuth)
  if (userAuth?._id) {
    if (!user?._id) {
      setUser(userAuth);
    }
  }

  // useEffect(() => {
  //   if (userAuth._id) {
  //     setUser(userAuth);
  //     console.log(user)
  //   } else {
  //     navigate("/login")
  //   }
  // }, [userAuth?.id])


  const logoutNavHandler = async (e) => {
    e.preventDefault()
    const temp = {}

    dispatch(deleteUserAuth())
    setUser(temp)

    navigate("/login")
  }

  const signUpNavHandler = (e) => {
    e.preventDefault()
    navigate("/signup")
  }

  const loginNavHandler = (e) => {
    e.preventDefault()
    navigate("/login")
  }

  const searchIpHandler = (e) => {
    e.preventDefault()
    setSearchIp(e.target.value);
  }

  const searchNavHandler = (e) => {
    e.preventDefault()

    if (showSearch) {
      if (searchIp.length > 0 && searchIp.length < 3) {
        setSearchWarning({
          alert: true,
          msg: 'Search term must be atleast 3 letters'
        })
      }
      if (searchIp.length >= 3) {
        setSearchWarning({
          alert: false,
          msg: ''
        })

        let searchIpTmp = searchIp

        setShowSearch(false)
        setSearchWarning({ alert: false, msg: '' })
        setInputHover(false)
        setSearchIp('')
        navigate(`/search?${searchIpTmp}`)
      }
    }
  }

  let inputClassName = "navSrchInput"

  showSearch ?
    (inputClassName = "navSrchInput") :
    (inputClassName = "navSrchInput navSrchInputInvisible")


  // console.log(searchRef)
  return (
    <>
      <div className={!pageScrolled ? ('navMainCont') : ('navMainCont navMainContBlack')}>
        {user?._id ?
          ( // User Present
            <>
              <div className='navCont'>

                <img
                  onClick={() => navigate("/movies")}
                  src={logo}
                  alt="" />

                <div className='navLinkCont'>
                  {
                    navbarLinks.map((item, index) =>
                      <Link to={item.path}
                        className="navLinkSingle" key={index}>
                        {item.name}
                      </Link>
                    )
                  }
                </div>




                <form className='navSrchCont'>
                  <input
                    ref={searchRef}
                    className={inputClassName}

                    type="text"
                    placeholder="Search"

                    onMouseEnter={() => setInputHover(true)}
                    onMouseLeave={() => setInputHover(false)}

                    onBlur={() => {
                      setShowSearch(false);
                      setInputHover(false);
                    }}

                    onChange={(e) => searchIpHandler(e)}
                  />

                  {(searchWarning.alert && showSearch) ?
                    (<h2 className='navSrchWarning'>{searchWarning.msg}</h2>)
                    : (<></>)}


                  <button
                    className='navSrchBtn'
                    onFocus={() => setShowSearch(true)}
                    onBlur={() => {
                      if (!inputHover) {
                        setShowSearch(false);
                      }
                    }}
                    onClick={(e) => searchNavHandler(e)}
                  >


                    < FaSearch />
                  </button>
                </form>


                <button
                  className='navLogoutBtn'
                  onClick={(e) => logoutNavHandler(e)}>
                  <RiLogoutCircleRLine />
                </button>
              </div>
            </>)
          :
          ((parentPage === "Login") ?
            (<>
              <div className='navCont'>
                <img src={logo} alt="" />
                <button
                  className='navButton2'
                  onClick={(e) => signUpNavHandler(e)}>
                  Sign Up
                </button>
              </div>
            </>) :
            (<>
              <div className='navCont'>
                <img src={logo} alt="" />
                <button
                  className='navButton2'
                  onClick={(e) => loginNavHandler(e)}>
                  Log In
                </button>
              </div>
            </>))




          // User Not Present

        }
      </div>
    </>


  )
}

export default Navbar 