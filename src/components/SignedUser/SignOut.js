
import '../../index.css'
import { useEffect } from 'react'
import { Link } from "react-router-dom"

import { useSelector, useDispatch } from 'react-redux'
import { signOut } from '../../features/auth/authSlice'
import { userProfileAsync, clearProfile } from '../../features/profile/profileSlice'

export default function SignOut() {

  const profile = useSelector((state) => state.profile)
  const userName = profile.data ? profile.data.userName : (profile.error || '')

  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(userProfileAsync())
  }, [dispatch])

  const handleSignOut = (e)=>{
    e.preventDefault()
    dispatch(signOut())
    dispatch(clearProfile())
  }

  return (
    <div>
        <Link to={"/dashboard/user"} className="main-nav-item">
          <i className="fa fa-user-circle"></i>
          {userName}
        </Link>
        <button className="main-nav-item no-style-button" onClick={handleSignOut}>
          <i className="fa fa-sign-out"></i>
          Sign Out
        </button>
    </div>
  )
}
