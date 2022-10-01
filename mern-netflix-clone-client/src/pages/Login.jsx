import React, { useEffect, useState } from 'react'
import './login.css'
import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { firebaseAuth } from '../utils/firebaseConfig';
import { useNavigate } from "react-router-dom";
import BackgroundImage from '../components/BackgroundImage';
import Navbar from '../components/Navbar';

const Login = () => {
  const [email, setEmail] = useState("")
  const [pass, setPass] = useState("")
  const [showWrongCreds, setShowWrongCreds] = useState(false)

  // const [navigateEffect, setnavigateEffect] = useState(false)

  const navigate = useNavigate()

  const loginHandler = async (e) => {
    e.preventDefault();

    try {
      const res = await signInWithEmailAndPassword(firebaseAuth, email, pass);
      navigate("/netflix");
    } catch (error) {
      console.log(error.code);

      setShowWrongCreds(true)
      setEmail("")
      setPass("")
    }
  }

  onAuthStateChanged(firebaseAuth, (currentUser) => {
    if (currentUser != null) {
      navigate("/netflix");
    }
  });


  return (
    <>
      <BackgroundImage />
      <Navbar />
      <div className='loginMainContainer'>

        <div className='loginContainer'>
          <h1>Login</h1>

          <form
            className='loginForm'
            onSubmit={(e) => loginHandler(e)}>

            <input
              type="email"
              placeholder='Email'
              onChange={(e) => setEmail(e.target.value)} />

            <input
              type="password"
              placeholder='Password'
              onChange={(e) => setPass(e.target.value)} />

            <button type='submit'>
              Login to your account
            </button>

            {
              showWrongCreds &&
              <div className='invalidCreds'>
                Wrong Email or Password
              </div>
            }

          </form>

        </div>
      </div>
    </>
  )
}

export default Login