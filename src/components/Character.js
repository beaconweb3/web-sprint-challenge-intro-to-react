// Write your Character component here
import React, { useState, useEffect } from 'react'



export function Character (props) {
    const {data} = props;

    const [button, setButton] = useState(false);
    


    return (
        <div className='Character-Label container'>
            <h2 className='Character-Name'>{data.name}{"     "}</h2>
            {button && <Info info = {data} /> }
            <button className='more-button' 
                    onClick={e => setButton(!button)}>
                        Show More
                </button>
        </div>
    )
}
function Info (props) {
    const {info} = (props)
    return (
        <>
            <p>weight: {info.mass}</p>
            <p>height: {info.height}</p>
            <p>Birth Year: {info.birth_year}</p>
        </>
    )
}