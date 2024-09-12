import React, { useEffect, useState } from 'react'

import { useLoaderData } from 'react-router-dom'

const Linkedin = () => {
    const data = useLoaderData()
    // const [data, setData] = useState([])

    // useEffect(() => {
    //     fetch(`https://fake-json-api.mock.beeceptor.com/users`)
    //         .then((res) => res.json())
    //         .then(data => {
    //             console.log("value: is", data)
    //             setData(data)
    //         })
    // }, [])
    return (
        <>
            <div className='flex flex-row'>
                <p className='font-bold text-lg'>Name:</p>
                <div className='ml-5 flex flex-col'>
                    {data.map((val) => {
                        return (
                            <div key={val.name} className='flex flex-col'>
                                {val.name}
                            </div>
                        )
                    })}
                </div>
                <p className='ml-3 font-bold text-lg'>Emails:</p>
                <div className='ml-5 flex flex-col'>
                    {data.map((val) => {
                        return (
                            <div key={val.email} className='flex flex-col'>
                                {val.email}
                            </div>
                        )
                    })}
                </div>
                <p className='ml-3 font-bold text-lg'>Id:</p>
                <div className='ml-5 flex flex-col'>
                    {data.map((val) => {
                        return (
                            <div key={val.id} className='flex flex-col'>
                                {val.id}
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default Linkedin


export const gitloaderdata = async () => {
    const response = await fetch(`https://fake-json-api.mock.beeceptor.com/users`)
    return response.json();
}