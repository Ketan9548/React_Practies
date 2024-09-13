import React, { useContext, useState } from 'react'
import Contextapi from '../Context/Contextapi'

const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const { setUser } = useContext(Contextapi)

    const handelsubmit = (e) => {
        e.preventDefault()
        setUser({ username, password });
    }
    return (
        <div>
            <h1>Login</h1>
            <input type="text" placeholder='username' value={username} onChange={(e) => setUsername(e.target.value)} />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='password' />
            <button onChange={handelsubmit()}>Submit</button>
        </div>
    )
}

export default Login

