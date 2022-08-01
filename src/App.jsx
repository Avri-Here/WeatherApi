import React, { useState, useEffect } from 'react';
import { WeatherFun } from "./WeatherFun";

import { GetFullDataToDay } from "./getFullDataToDay";
import { GetWeatherApi } from "./GetWeatherApi";
import SearchLocationInput from './SearchLocationInput';
import ApiKey from "./ApiKey.json"


export const App = () => {
  // Getting weather from the API server !
  const [Weather, SetWeather] = useState(null);
  const [WeatherCiti, SetWeatherCiti] = useState("תל אביב");
  // Getting weather for Tel Aviv by default !
  const [InputLatLng, SetInput] = useState({ latitude: 32.109333, longitude: 34.855499 });


  useEffect(() => {
    GetWeatherApi("https://api.openweathermap.org/data/2.5/onecall?lat=" + InputLatLng.latitude + "&lon=" + InputLatLng.longitude + "&exclude=current,hourly,minutely,alerts&units=metric&appid=" + ApiKey + "&lang=he")
      .then((data) => {
        SetWeather(data)
        console.log(data);
      })

  }, [InputLatLng])

  if (Weather) {

    return (
      <>
        <GetFullDataToDay serverDataWeather={Weather} city={WeatherCiti} />
        <SearchLocationInput SetData={SetInput} SetWeatherCiti = {SetWeatherCiti}/>
        <div id="all">
          {Weather.daily.map((item, index) => {
            if (index !== 0) return <WeatherFun key={index} serverData={item} city={WeatherCiti} />
          })}
        </div>
      </>
    )
  }
}