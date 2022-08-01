import { MyDayHebre } from "./GetDayInHeb";

export const GetFullDataToDay = (props) => {
  return (
    <div
      className="widget"
      id={
        props.serverDataWeather.daily[0].temp.max >= 27
          ? "sun"
          : props.serverDataWeather.daily[0].temp.max >= 24
          ? "mediom"
          : "rain"
      }
    >
      <div className="left-panel panel">
        <div className="city">
          {MyDayHebre(props.serverDataWeather.daily[0])} <br />
          {new Date(
            props.serverDataWeather.daily[0].dt * 1000
          ).toLocaleDateString()}
        </div>
        <div className="city">{props.city}</div>
        <div className="temp">
          {Math.floor(props.serverDataWeather.daily[0].temp.max)}°
        </div>
      </div>
    </div>
  );
};

