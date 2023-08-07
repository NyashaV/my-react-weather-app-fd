import React from "react";
import "./footer.css";

export default function Footer() {
  return (
    <div className="Footer">
      {" "}
      <a
        href="https://www.weather.com"
        rel="noreferrer"
        target="_blank"
        className="weatherwebsite"
      >
        weather.com
      </a>
      <div className="githublink">
        <a
          href="https://github.com/NyashaV/my-react-weather-app-w4"
          target="_blank"
          rel="noopener noreferrer"
        >
          Open source code
        </a>
        <span> by Nyasha Tavatya </span>
      </div>
    </div>
  );
}
