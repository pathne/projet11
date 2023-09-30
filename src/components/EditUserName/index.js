
import './index.css'
import { useState, useEffect } from 'react'

import { useSelector, useDispatch } from 'react-redux'

import { changeUserNameAsync, clearChangeUserNameError } from '../../features/profile/profileSlice'

export default function EditUserName(props) {

  const closeEditingUserName = props.closeEditingUserName

  const [editedUserName, setEditedUserName] = useState(props.userName)
  const [querying, setQuerying] = useState(false)

  const changeUserNameError = useSelector((state) => state.profile.changeUserNameError);
  const changeUserNamePending = useSelector((state) => state.profile.changeUserNamePending);

  const dispatch = useDispatch()

  const handleSubmit = (e)=>{
    e.preventDefault()
    setQuerying(true)
    dispatch(changeUserNameAsync(editedUserName))
  }

  const handleCancel = (e)=>{
    e.preventDefault()
    dispatch(clearChangeUserNameError())
    closeEditingUserName()
  }

  // handling close at successfull completion of changeUserNameAsync
  useEffect(()=>{
    if (querying && !changeUserNamePending){
      setQuerying(false)
      if (!changeUserNameError){
        closeEditingUserName()
      }
    }
  }, [querying, changeUserNamePending, changeUserNameError, closeEditingUserName])

  return (
    <div className='edit-username-container'>
      <div className='edit-username-layout'>
        <h1>Edit user info</h1>
        {changeUserNameError ? <p>{changeUserNameError}</p> : null}
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="userName">User name:</label>
            <input
              type="text"
              id="userName"
              value={editedUserName}
              onChange={(e) => setEditedUserName(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="firstName">First name:</label>
            <input
              type="text"
              id="firstName"
              value={props.firstName}
              readOnly
            />
          </div>
          <div>
          <label htmlFor="lastName">Last name:</label>
            <input
              type="text"
              id="lastName"
              value={props.lastName}
              readOnly
            />
          </div>
          <div className='edit-username-buttons'>
            <button type="submit" disabled={changeUserNamePending}>Save</button>
            <button onClick={handleCancel}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  )
}
