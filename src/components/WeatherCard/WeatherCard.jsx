import React from 'react'
import styles from './WeatherCard.module.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const WeatherCard = (props) => {
    const {weather} = props;

    console.log(weather)

    // const renderWeather = weather.length ?
    // weather.map((item, index) =>
    //     <WeatherCard 
    //     weather={item}
    //     key={index}
    //     />) :

    return (
        <div className={styles.WeatherCard}>
            <p>The Weather in {weather.name} is ...</p>
            <p>Temp is {weather.main.temp}</p>
            <FontAwesomeIcon icon="cloud" />

        </div>
    )
}
export default WeatherCard;