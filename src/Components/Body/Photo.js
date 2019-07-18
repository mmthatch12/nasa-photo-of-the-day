import React, { useState, useEffect } from "react";
import axios from 'axios';
import Title from './Title'
import CountButton from './CountButton'
import Copyright from './Copyright'
import Description from './Description'
import TheImg from '../Styles/Image'
import { Imdiv } from '../Styles/Imgdiv'

// https://api.nasa.gov/planetary/apod?api_key=keyqpOTD10PDmB3NlCQvuBgMs4qlPUd911rMfedh&date=2019-07-12

export default function Photo() {
    const[im, setImg] = useState('');
    const[title, setTitle] = useState('');
    const[copyright, setCopyright] = useState('');
    const[descript, setDescript] = useState('');

    useEffect(() => {
        axios
            .get(`https://api.nasa.gov/planetary/apod?api_key=keyqpOTD10PDmB3NlCQvuBgMs4qlPUd911rMfedh&date=2019-07-12`)
            .then(response => {
                const photofday = response.data.hdurl;
                const titleofday = response.data.title;
                const copyofday = response.data.copyright
                const descofday = response.data.explanation
                console.log('is the the thing?', photofday)
                console.log('title', titleofday)
                setImg(photofday)
                setTitle(titleofday)
                setCopyright(copyofday)
                setDescript(descofday)
            })
        }, [])

    return (

        <div className="photoDay">
            <Imdiv>
                <CountButton />
                <div>
                    <Title title={title}/>
                    <TheImg src={im}/>
                    <Copyright copy={copyright} />
                </div>
                <Description desc={descript} /> 
            </Imdiv> 


        </div>
    )
}