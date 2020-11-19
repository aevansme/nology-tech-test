import React, {
  createContext,
  useEffect,
  useState
} from "react";

export const WeatherDataContext = createContext({});

export const WeatherDataProvider = (props) => {

  const [weather, setWeather] = useState([]);
  const api_key = "6e5ec1ab2179bd3443db2e6f0325cdf1";
  const citys = '';

  const getWeatherData = (citys) => {
    fetch(`http://api.openweathermap.org/data/2.5/group?id=${citys}&appid=${api_key}`)
      .then((res) => res.json())
      .then((res) => setWeather(res.list))
  }

  useEffect(() => {
    getWeatherData("4219762,4749005,2643744");
  }, []);

  return ( <
    WeatherDataContext.Provider value = {{
        weather,
        citys,
        getWeatherData
      }}> 
      {
        props.children
      } 
      </WeatherDataContext.Provider>
  );
};
