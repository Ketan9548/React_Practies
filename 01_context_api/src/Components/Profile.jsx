import { useContext } from 'react'
import Contextapi from '../Context/Contextapi'

const Profile = () => {
    const { user } = useContext(Contextapi);

    return (
        user && user.username ? (
            <div>Welcome {user.username}</div>
        ) :
            (
                <div>Please login</div>
            )
    )
}

export default Profile
