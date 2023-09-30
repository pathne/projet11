
import { useSelector } from 'react-redux'

import SignIn from './SignIn'
import SignOut from './SignOut'

export default function SignedUser() {

  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated)

  if (isAuthenticated){
    return <SignOut />
  }
  else{
    return <SignIn />
  }
}
