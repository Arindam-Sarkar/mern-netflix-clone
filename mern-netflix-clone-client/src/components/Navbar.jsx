import React, { useEffect, useRef, useState } from 'react'
import './navbar.css'
import logo from '../assets/logo.png'
import { getAuth, signOut } from "firebase/auth";
import { Link, Outlet } from "react-router-dom";
import { firebaseAuth } from '../utils/firebaseConfig';
import { FaSearch } from "react-icons/fa";
import { RiLogoutCircleRLine } from "react-icons/ri"

import { useNavigate } from 'react-router-dom';
import { async } from '@firebase/util';

const navbarLinks = [
  // { name: "Home", path: "/" },
  { name: "Movies", path: "/movies" },
  { name: "TV Shows", path: "/tvShows" },
  { name: "Favourites", path: "/favourites" },
]


const Navbar = ({ pageScrolled }) => {
  const navigate = useNavigate()

  const [showSearch, setShowSearch] = useState(false)
  const [inputHover, setInputHover] = useState(false);

  const searchRef = useRef()


  let inputClassName = "navSrchInput"


  // Check if the user is logged in
  const currentUser = getAuth().currentUser;

  const logoutNavHandler = async (e) => {
    e.preventDefault()

    const auth = getAuth();
    signOut(auth).then(() => {
      navigate("/login")
    }).catch((error) => {
      console.log(error)
    });
  }

  const signInNavHandler = (e) => {
    e.preventDefault()
    navigate("/login")
  }

  // useEffect(() => {
  //   searchRef.current.focus()
  // })

  showSearch ?
    (inputClassName = "navSrchInput") :
    (inputClassName = "navSrchInput navSrchInputInvisible")


  // console.log(searchRef)
  return (
    <>
      <div className={!pageScrolled ? ('navMainCont') : ('navMainCont navMainContBlack')}>
        {currentUser ?
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

                <div className='navSrchCont'>
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
                  />

                  <button
                    className='navSrchBtn'
                    onFocus={() => setShowSearch(true)}
                    onBlur={() => {
                      if (!inputHover) {
                        setShowSearch(false);
                      }
                    }}>
                    < FaSearch />
                  </button>
                </div>


                <button
                  className='navLogoutBtn'
                  onClick={(e) => logoutNavHandler(e)}>
                  <RiLogoutCircleRLine />
                </button>
              </div>
            </>)
          :
          ( // User Not Present
            <>
              <div className='navCont'>
                <img src={logo} alt="" />
                <button
                  className='navButton2'
                  onClick={(e) => signInNavHandler(e)}>
                  Log In
                </button>
              </div>
            </>)
        }
      </div>
    </>


  )
}

export default Navbar 