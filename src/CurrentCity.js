import React from "react";
import Card from "react-bootstrap/Card";
import FormatDate from "./FormatDate";
import "bootstrap/dist/css/bootstrap.min.css";
import "./currentcity.css";
import WeatherTemperature from "./WeatherTemperature";

export default function CurrentCity(props) {
  return (
    <div className="CurrentCity">
      <Card
        style={{ width: "370px" }}
        text="white"
        className="mb-3"
        id="weathercity"
      >
        <h2 id="city-search">Weather for {props.data.city}</h2>
        <div className="card-body">
          <h3 className="tempratureChanges">
            <WeatherTemperature celsius={props.data.temperature} />
          </h3>
        </div>
      </Card>
      <Card
        style={{ width: "150px" }}
        text="white"
        className="mb-3"
        id="weatherdate"
      >
        <h3 className="dayTimeHeading" id="date-time">
          {" "}
          <FormatDate date={props.data.date} />
          <hr />
        </h3>
        <h5 className="description">{props.data.description}</h5>
      </Card>
      <img src={props.data.icon} alt="weather emoji" id="icon" />
      <Card id="weatherstats">
        <div className="card-body">
          <span id="humidity">Humidity: {props.data.humidity}</span>%
          <br />
          <span id="wind">Wind: {Math.round(props.data.wind)} </span>mph
        </div>
      </Card>
    </div>
  );
}
