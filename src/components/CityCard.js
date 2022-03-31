import React from 'react'
import './CityCard.css'

const CityCard = (props) => {
    return (
        <div className='card'>
            <span>{props.cityName}</span>
            <span>{props.cityTimeZone}</span>
            <h1>11</h1>
            <img src='https://cdn.iconscout.com/icon/free/png-256/weather-2191838-1846632.png' alt=''/>
        </div>
    )
}

export default CityCard
