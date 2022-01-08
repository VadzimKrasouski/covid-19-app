import React from 'react'
import './Marker.scss'
import { useState } from 'react';


const Marker = React.memo(({country, countryCode, onMarkerHandler, countryData}) => {
    const [hover, setHover] = useState(false);
    const onHover = () => {
        setHover(true);
        onMarkerHandler(countryCode)
        console.log(countryData);
    };

    const onLeave = () => {
        setHover(false);
    };


    return (
        <div className='wrapper' onMouseEnter={onHover}
             onMouseLeave={onLeave}
             role='button'>
            {
                hover && countryData &&
                <div className='container'>
                    <div className='description'>
                        <div className='title'>{country}</div>
                        <div className='totalConfirmed'>{'Total Confirmed: ' + countryData.TotalConfirmed}</div>
                        <div className='totalDeaths'>{'Total Deaths: ' + countryData.TotalDeaths}</div>
                        <div className='totalRecovered'>{'Total Recovered: ' + countryData.TotalRecovered}</div>
                    </div>
                </div>
            }
        </div>
    )
})


export default Marker
