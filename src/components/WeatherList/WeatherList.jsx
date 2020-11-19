import React, { useState, useContext } from "react";
import { WeatherDataContext } from "../../context/WeatherDataContext";
import WeatherCard from "../WeatherCard";
import styles from './WeatherList.module.scss'
// import weather from "../../data/weather"

const WeatherList = () => {

    const WeatherDataCont = useContext(WeatherDataContext);
    const {weather} = WeatherDataCont;

    const renderWeather = weather.length ?
        weather.map((item, index) =>
            <WeatherCard 
            weather={item}
            key={index}
            />) : ('None')

    return (
        <div className={styles.WeatherList}>
            {renderWeather}
        </div>
    )
}
export default WeatherList;