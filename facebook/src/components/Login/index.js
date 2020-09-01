import React from 'react'
import { Button } from '@material-ui/core'
import { auth, provider } from '../../firebase'

import './styles.css'


function Login() {
  const signIn = () => {
    auth.signInWithPopup(provider)
      .then(result => {
        console.log(result)
      })
      .catch(err => alert(err.message))
  }

  return (
    <div className="login">
      <div className="login__logo">
        <img
          src="https://image.flaticon.com/icons/png/512/124/124010.png"
          alt="facebook icon"
        />
        <img className="face__logo"
          src="https://logodownload.org/wp-content/uploads/2014/09/facebook-logo-1-1.png"
          alt="facebook logo"
        />
      </div>
      <Button type="submit" onClick={signIn}>
        Sign In
      </Button>
    </div>
  )
}

export default Login
