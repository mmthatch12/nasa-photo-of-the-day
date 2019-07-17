import React, { useState, useEffect } from "react";

import axios from 'axios';

// https://api.nasa.gov/planetary/apod?api_key=keyqpOTD10PDmB3NlCQvuBgMs4qlPUd911rMfedh&date=2019-07-12

export default function Photo() {
    const[im, setImg] = useState('');

    useEffect(() => {
        axios
            .get(`https://api.nasa.gov/planetary/apod?api_key=keyqpOTD10PDmB3NlCQvuBgMs4qlPUd911rMfedh&date=2019-07-12`)
            .then(response => {
                const photofday = response.data.url;
                console.log('is the the thing?', photofday)
                setImg(photofday)
            })
        }, [])

    return (
        <div className="photoDay">
            <img src={im}/>
        </div>
    )
}