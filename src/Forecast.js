import React from "react";
import "./forecast.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Forecast() {
  return (
    <Container>
      <Row className="placeholderForecast">
        <Col xs={2} id="forecast">
          <h6 className="forecastDay">Mon</h6>
          <img src="#" alt="☀️" id="forecast-icon" />
          <div className="forecastTemps">
            <span className="forecastTempMax">20°</span>|
            <span className="forecastTempMin">10°</span>
          </div>
        </Col>
        <Col xs={2} id="forecast">
          <h6 className="forecastDay">Mon</h6>
          <img src="#" alt="☀️" id="forecast-icon" />
          <div className="forecastTemps">
            <span className="forecastTempMax">20°</span>|
            <span className="forecastTempMin">10°</span>
          </div>
        </Col>
        <Col xs={2} id="forecast">
          <h6 className="forecastDay">Mon</h6>
          <img src="#" alt="☀️" id="forecast-icon" />
          <div className="forecastTemps">
            <span className="forecastTempMax">20°</span>|
            <span className="forecastTempMin">10°</span>
          </div>
        </Col>
        <Col xs={2} id="forecast">
          <h6 className="forecastDay">Mon</h6>
          <img src="#" alt="☀️" id="forecast-icon" />
          <div className="forecastTemps">
            <span className="forecastTempMax">20°</span>|
            <span className="forecastTempMin">10°</span>
          </div>
        </Col>
        <Col xs={2} id="forecast">
          <h6 className="forecastDay">Mon</h6>
          <img src="#" alt="☀️" id="forecast-icon" />
          <div className="forecastTemps">
            <span className="forecastTempMax">20°</span>|
            <span className="forecastTempMin">10°</span>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
