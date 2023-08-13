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
          href="https://github.com/NyashaV/my-react-weather-app-fd"
          target="_blank"
          rel="noopener noreferrer"
        >
          Open-sourced on GitHub
        </a>
        <div>
          {" "}
          Coded by{" "}
          <a
            href="https://www.linkedin.com/in/nyasha-tavatya-534581204/?originalSubdomain=uk"
            target="_blank"
            rel="noopener noreferrer"
          >
            Nyasha Tavatya{" "}
          </a>{" "}
        </div>
      </div>
    </div>
  );
}
