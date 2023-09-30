
import './index.css'
import { useState, useEffect } from 'react'
import { Navigate } from "react-router-dom"

import { useDispatch, useSelector } from 'react-redux'
import { signInAsync, toggleRememberMe } from '../../features/auth/authSlice'

export default function SignInForm() {

  const [email, setEmail] = useState('tony@stark.com')
  const [password, setPassword] = useState('password123')

  const rememberMe = useSelector((state) => state.auth.rememberMe)
  const error = useSelector((state) => state.auth.error)
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated)

  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(signInAsync({email, password}))
  }

  const handleToggleRememberMe = (e) => {
    dispatch(toggleRememberMe())
  }

  useEffect(()=>{
    document.title = 'Sign In'
  })

  if (isAuthenticated) {
    return (
      <Navigate replace to="/dashboard/user" />
    )
  }
  else{
    return (
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        {error ? <p>{error}</p> : null}
        <form onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <label htmlFor="email">Username</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="input-remember">
            <input
                type="checkbox"
                id="remember-me"
                checked={rememberMe}
                onChange={handleToggleRememberMe}
            />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <button type="submit" className="sign-in-button">Sign In</button>
        </form>
      </section>
    )
  }
}
