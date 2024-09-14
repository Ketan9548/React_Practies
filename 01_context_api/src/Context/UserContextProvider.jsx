import React, { useState } from 'react';
import Contextapi from './Contextapi';

const UserContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    return (
        <Contextapi.Provider value={{ user, setUser }}>
            {children}
        </Contextapi.Provider>
    );
};

export default UserContextProvider;
