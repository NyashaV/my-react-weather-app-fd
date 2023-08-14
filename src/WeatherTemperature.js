import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");

  function displayFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function displayCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function fahrenheit() {
    return (props.celsius * 9) / 5 + 32;
  }

  if (unit === "celsius") {
    return (
      <div classname="WeatherTemperature">
        <span id="temprature-unit"> {Math.round(props.celsius)} </span>
        <span id="celsius-link" className="tempconversion active">
          °C |{" "}
          <a href="/" onClick={displayFahrenheit}>
            °F
          </a>
        </span>
      </div>
    );
  } else {
    return (
      <div classname="WeatherTemperature">
        <span id="temprature-unit"> {Math.round(fahrenheit())} </span>
        <span id="celsius-link" className="tempconversion active">
          <a href="/" onClick={displayCelsius}>
            °C
          </a>{" "}
          | °F
        </span>
      </div>
    );
  }
}
