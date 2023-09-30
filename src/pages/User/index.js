
import '../../index.css'
import React, { useEffect } from 'react';

import Header from '../../components/Header'
import UserProfileHeader from '../../components/UserProfileHeader'
import AccountsList from '../../components/AccountsList'
import Footer from '../../components/Footer'

export default function Home() {

  useEffect(()=>{
    document.title = 'Argent Bank - User Dashboard'
  })

  return (
    <React.Fragment>
      <Header />
      <main className="main bg-dark">
        <UserProfileHeader />
        <AccountsList />
      </main>
      <Footer />
    </React.Fragment>
  );
}


/*
import { useEffect } from 'react';
import { Link } from "react-router-dom";

import { useSelector, useDispatch } from 'react-redux';
import { signOut } from '../../features/auth/authSlice';
import { userProfileAsync } from '../../features/profile/profileSlice';

import Modify from './Modify'

export default function User() {

    const userProfile = useSelector((state) => state.profile.profile);

    const dispatch = useDispatch()

    useEffect(()=>{
        document.title = 'User'
    })

    useEffect(()=>{
        dispatch(userProfileAsync())
    }, [dispatch]) // dispatch doesnt change => loaded once for the page

    const handleSignOut = ()=>{
        dispatch(signOut())
    }


    return (
        <div>
            {userProfile ? <p>{userProfile.userName}</p> : null}
            <p>User</p>
            <Link to={"/"}>Home</Link>
            <p onClick={handleSignOut}>SignOut</p>
            {userProfile ?
                <Modify userName={userProfile.userName}/>
            : null}
        </div>
    )
}
*/
