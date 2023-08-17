import React from "react";
import "./forecast.css";

export default function WeatherForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temperature.maximum);
    return `${temperature}°`;
  }
  function minTemperature() {
    let temperature = Math.round(props.data.temperature.minimum);
    return `${temperature}°`;
  }

  function day() {
    let date = new Date(props.data.time * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div>
      <h6 className="forecastDay">{day()}</h6>
      <img
        src={props.data.condition.icon_url}
        alt="weather emoji"
        id="forecast-icon"
      />
      <div className="forecastTemps">
        <span className="forecastTempMax">{maxTemperature()}</span> {""}
        <span className="forecastTempMin">{minTemperature()}</span>
      </div>
    </div>
  );
}
