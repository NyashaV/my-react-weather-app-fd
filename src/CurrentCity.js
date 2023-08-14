import React from "react";
import Card from "react-bootstrap/Card";
import FormatDate from "./FormatDate";
import "bootstrap/dist/css/bootstrap.min.css";

export default function CurrentCity(props) {
  return (
    <div className="fixIt">
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
              <span id="temprature-unit">
                {" "}
                {Math.round(props.data.temperature)}{" "}
              </span>
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
      </div>{" "}
    </div>
  );
}

// import React, { useState } from "react";
// import "./currentcity.css";
// import Card from "react-bootstrap/Card";
// import "bootstrap/dist/css/bootstrap.min.css";
// import axios from "axios";
// import FormatDate from "./FormatDate";

// export default function CurrentCity(props) {
// const [city, setCity] = useState("");
// const [weatherData, setWeatherData] = useState({ loaded: false });

// function displayWeather(response) {
//   console.log(response.data);
//   setWeatherData({
//     loaded: true,
//     date: new Date(response.data.time * 1000),
//     city: response.data.city,
//     temperature: response.data.temperature.current,
//     description: response.data.condition.description,
//     humidity: response.data.temperature.humidity,
//     wind: response.data.wind.speed,
//     icon: response.data.condition.icon_url,
//   });
// }

//   if (weatherData.loaded) {
//     return (
//       <div className="CurrentCity">
//         <Card
//           style={{ width: "370px" }}
//           text="white"
//           className="mb-3"
//           id="weathercity"
//         >
//           <h2 id="city-search">Weather for {weatherData.city}</h2>
//           <div className="card-body">
//             <h3 className="tempratureChanges">
//               <span id="temprature-unit">
//                 {" "}
//                 {Math.round(weatherData.temperature)}{" "}
//               </span>
//               <span id="celsius-link" className="tempconversion active">
//                 °C
//               </span>
//             </h3>
//           </div>
//         </Card>
//         <Card
//           style={{ width: "150px" }}
//           text="white"
//           className="mb-3"
//           id="weatherdate"
//         >
//           <h3 className="dayTimeHeading" id="date-time">
//             {" "}
//             <FormatDate date={weatherData.date} />
//             <hr />
//           </h3>
//           <h5 className="description">{weatherData.description}</h5>
//         </Card>
//         <img src={weatherData.icon} alt="weather emoji" id="icon" />
//         <Card id="weatherstats">
//           <div className="card-body">
//             <span id="humidity">Humidity: {weatherData.humidity}</span>%
//             <br />
//             <span id="wind">Wind: {Math.round(weatherData.wind)} </span>mph
//           </div>
//         </Card>
//       </div>
//     );
//   } else {
//     let apiKey = "9afa0tbcd39f5a30316f363o86cafb4c";
//     let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}&units=metric`;
//     axios.get(apiUrl).then(displayWeather);

//     return <h1>The app is loading</h1>;
//   }
// }
