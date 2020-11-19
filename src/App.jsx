import React from "react";
import styles from './App.scss';
import Routes from "./containers/Routes"
import library from "./data/fa-library";
import { WeatherDataProvider } from "./context/WeatherDataContext";


const App = () => {

  return (
    <div className="App">
      <WeatherDataProvider>
        <Routes/>
      </WeatherDataProvider>
    </div>
  );
}

export default App;
