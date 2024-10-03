import React, {useContext} from 'react'
import UserContext from '../Context/UserContext'



function Profile() {

    const {user} = useContext(UserContext)  // get Data


  if(!user) return <div>Please Login</div>

  return <div>Welcome {user.usernamr}</div>
}

export default Profile  