import React, { useState, useEffect } from "react";
import axios from 'axios';
import Title from './Title'
import CountButton from './CountButton'

// https://api.nasa.gov/planetary/apod?api_key=keyqpOTD10PDmB3NlCQvuBgMs4qlPUd911rMfedh&date=2019-07-12

export default function Photo() {
    const[im, setImg] = useState('');
    const[title, setTitle] = useState('');

    useEffect(() => {
        axios
            .get(`https://api.nasa.gov/planetary/apod?api_key=keyqpOTD10PDmB3NlCQvuBgMs4qlPUd911rMfedh&date=2019-07-12`)
            .then(response => {
                const photofday = response.data.url;
                const titleofday = response.data.title;
                console.log('is the the thing?', photofday)
                console.log('title', titleofday)
                setImg(photofday)
                setTitle(titleofday)
            })
        }, [])

    return (

        <div className="photoDay">
            <Title title={title}/>
            <img className='theImg' src={im}/>
            <CountButton />
            
        </div>
    )
}