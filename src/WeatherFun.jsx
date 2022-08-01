
import { MyDayHebre } from "./GetDayInHeb"
export const WeatherFun = (props) => {


  return (
    <div
      style={{ width: 20 + "%", marginLeft: 0.1 + "%", marginRight: 0.1 + "%" }}
      className="main container"
    >
      <div id={props.serverData.temp.day >= 27 ? "sun" : props.serverData.temp.day >= 24 ? "mediom" : "rain" }>
        <div className="col-xs-12">
          <div className="col-xs-12 col-sm-6 col-sm-offset-3 col-lg-4 col-lg-offset-4 weather-panel">
            <div className="col-xs-6">
              <h2 style={{ textAlign: "center" }}>
                <br />
                {MyDayHebre(props.serverData)}
                <br />
                <small>
                  {new Date(props.serverData.dt * 1000).toLocaleDateString()}
                </small>
              </h2>
              <p
                style={{ textAlign: "center", fontSize: 150 + "%" }}
                className="h3"
              >
                
                {props.serverData.weather[0].description}
              </p>
              <hr />
            </div>
            <div className="col-xs-6 text-center">
              <div>
                <span style={{ color: "black" }} className="h1 temperature">
                  {Math.floor(props.serverData.temp.day)}°
                </span>
                <hr />
                <div style={{ color: "black" }} className="h2 temperature">
                  {Math.floor(props.serverData.temp.min)}° /
                  {Math.floor(props.serverData.temp.max)}°
                  <hr />
                </div>

                <br />
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};
