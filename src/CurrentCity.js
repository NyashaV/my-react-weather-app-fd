import React from "react";
import "./currentcity.css";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";

export default function CurrentCity() {
  return (
    <div className="CurrentCity">
      <Card
        style={{ width: "370px" }}
        text="white"
        className="mb-3"
        id="weathercity"
      >
        <h2 id="city-search">Weather for Birmingham</h2>
        <div className="card-body">
          <h3 className="tempratureChanges">
            <span id="temprature-unit">20 </span>
            <span id="celsius-link" className="tempconversion active">
              °C
            </span>
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
          Saturday 11:00
          <hr />
        </h3>
        <h5 className="description">To be confirmed </h5>
      </Card>
      <img src="" alt="⛅️" id="icon" />
      <Card id="weatherstats">
        <div className="card-body">
          <span id="humidity">Humidity: 66</span>%
          <br />
          <span id="wind">Wind: 6</span>km/h
        </div>
      </Card>
    </div>
  );
}
