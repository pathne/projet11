
import './index.css'
import { useState, useEffect } from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { userProfileAsync } from '../../features/profile/profileSlice'

import EditUserName from '../../components/EditUserName'

export default function UserProfileHeader() {

  const [isEditingUserName, setIsEditingUserName] = useState(false)

  const closeEditingUserName = ()=>{
    setIsEditingUserName(false)
  }

  const profile = useSelector((state) => state.profile)
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(userProfileAsync())
  }, [dispatch]) // dispatch doesnt change => loaded once for the page

  if (profile.error){
    return (
      <div className="header">
        <h1>{profile.error}</h1>
      </div>
    )
  }
  else if (profile.pending || profile.data === null){
    return null
  }
  else if (isEditingUserName){
    return (
      <EditUserName
        userName={profile.data.userName}
        firstName={profile.data.firstName}
        lastName={profile.data.lastName}
        closeEditingUserName={closeEditingUserName}
      />
    )
  }
  else{
    return (
      <div className="header">
        <h1>Welcome back<br />{`${profile.data.firstName} ${profile.data.lastName}`}!</h1>
        <button className="edit-button" onClick={e => setIsEditingUserName(true)}>Edit Name</button>
      </div>
    )
  }
}
