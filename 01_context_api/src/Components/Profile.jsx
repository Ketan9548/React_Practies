import React, { useContext } from 'react'
import Contextapi from '../Context/Contextapi'

const Profile = () => {
    const {user} = useContext(Contextapi)

    if(!user) return <div>please login</div>
    return <div> Welcome {user.username}</div>
}

export default Profile
