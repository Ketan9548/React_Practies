import React, { useEffect, useState } from 'react'

const Linkedin = () => {
    const [data,setData] = useState([])

    useEffect(() => {
        fetch(`https://fake-json-api.mock.beeceptor.com/users`)
            .then((res) => res.json())
            .then(data => {
                console.log("value: is", data)
                setData(data)
            })
    },[])
    return (
        <div>Linkding Follower: {data[0].company}</div>
    )
}

export default Linkedin