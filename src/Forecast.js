import React, { useState, useEffect } from "react";
import "./forecast.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function Forecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    console.log(forecast);
    return (
      <Container>
        <Row className="placeholderForecast">
          {forecast.map(function (dailyForecast, index) {
            if (index < 5) {
              return (
                <Col xs={2} id="forecast" key={index}>
                  <WeatherForecastDay data={dailyForecast} />
                </Col>
              );
            } else {
              return null;
            }
          })}
        </Row>
      </Container>
    );
  } else {
    let apiKey = "9afa0tbcd39f5a30316f363o86cafb4c";
    let longitude = props.coordinates.longitude;
    let latitude = props.coordinates.latitude;
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${longitude}&lat=${latitude}&key=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);

    return <h1>Forecast loading</h1>;
  }
}
