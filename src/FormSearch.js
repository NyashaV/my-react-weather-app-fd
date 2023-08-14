import React, { useState } from "react";
import "./formsearch.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import axios from "axios";
import CurrentCity from "./CurrentCity";

export default function FormSearch(props) {
  const [weatherData, setWeatherData] = useState({ loaded: false });
  const [city, setCity] = useState(props.defaultCity);

  function displayWeather(response) {
    console.log(response.data);
    setWeatherData({
      loaded: true,
      date: new Date(response.data.time * 1000),
      city: response.data.city,
      temperature: response.data.temperature.current,
      description: response.data.condition.description,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
      icon: response.data.condition.icon_url,
    });
  }

  function search() {
    let apiKey = "9afa0tbcd39f5a30316f363o86cafb4c";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeather);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search(city);
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.loaded) {
    return (
      <div className="WeatherJoint">
        <Container fluid id="formsearch">
          <Form
            onSubmit={handleSubmit}
            action="search"
            className="mb-2 form-group searchAction"
          >
            <Row>
              {" "}
              <Col xs={5}>
                <Form.Control
                  onChange={handleCityChange}
                  type="text"
                  placeholder="Search your city"
                ></Form.Control>
              </Col>
              <Col xs={2}>
                {" "}
                <Button variant="light" className="citySearch">
                  Search
                </Button>
              </Col>
              <Col xs={4}>
                {" "}
                <Button id="current-location-button" className="searchlocation">
                  Your location
                </Button>
              </Col>
            </Row>{" "}
          </Form>
        </Container>
        <CurrentCity data={weatherData} />
      </div>
    );
  } else {
    search();
    return <h1>The app is loading</h1>;
  }
}
