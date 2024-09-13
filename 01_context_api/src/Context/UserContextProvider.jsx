import React, { useState } from 'react'
import Contextapi from './Contextapi'

const UserContextProvider = ({ childeren }) => {
    const [user, setUser] = useState(null);
    return (
        <div>
            <Contextapi.Provider value={{user,setUser}}>
                {childeren}
            </Contextapi.Provider>
        </div>
    )
}

export default UserContextProvider 