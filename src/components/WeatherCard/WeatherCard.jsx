import React from 'react'
import styles from './WeatherCard.module.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const WeatherCard = (props) => {
    const { weather } = props;

    return (
        <div className={styles.WeatherCard}>
            <div className={styles.FontAwesomeIcon}>
                <FontAwesomeIcon icon="cloud" />
            </div>
            <div className={styles.weatherWords}>
                <p>The Weather in {weather.name} is ...</p>
                <p>Temp is {weather.main.temp}</p>
                <p>Humidity is {weather.main.humidity}</p>
                <p>Min Temp is {weather.main.temp_min}</p>
                <p>Max Temp is {weather.main.temp_max}</p>

            </div>

        </div>
    )
}
export default WeatherCard;