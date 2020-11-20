import React from "react";
import { useState, useEffect } from "react";

import BodyStyle from "./Body.css";

function Body(props) {

  function convertToCelciusOrFahrenheit(temp) {
    const tempInCelcius = temp - 273.15;
    return props.isCelcius
      ? Math.round(tempInCelcius).toString() + "°C"
      : Math.round(tempInCelcius * (9 / 5) + 32).toString() + "°F";
  }

  function toggleIsCelcius() {
    props.setIsCelcius(!props.isCelcius);
  }

  return props.city == null ? (
    <div></div>
  ) : (
    <div className="card text-center">
      <div className="card-header">{props.city.name}</div>
      <div className="card-body">
        <div>
          <img
            src={`https://www.countryflags.io/${props.city.sys.country}/flat/64.png`}
          />
          <h2 className="d-inline ml-4 mt-6">
            {" "}
            {convertToCelciusOrFahrenheit(props.city.main.temp)}
          </h2>
          <img
            className="ml-2"
            src={`http://openweathermap.org/img/wn/${props.city.weather[0].icon}@2x.png`}
          />
        </div>
        <div className="container">
          <div>Wind: {props.city.wind.speed} m/s</div>
          <div>Humidity: {props.city.main.humidity}%</div>
          <div>
            Wind Chill:{" "}
            {convertToCelciusOrFahrenheit(props.city.main.feels_like)}
          </div>
          <div>Cloudiness: {props.city.clouds.all}%</div>
          <div>
            Sunrise:{" "}
            {new Date(Number(props.city.sys.sunrise) * 1000).toTimeString()}
          </div>
          <div>
            Sunset:{" "}
            {new Date(Number(props.city.sys.sunset) * 1000).toTimeString()}
          </div>
        </div>
      </div>
      <div className="card-footer">
        <input
          type="checkbox"
          className="form-check-input"
          onClick={toggleIsCelcius}
        />
        <label className="form-check-label">°C?</label>
      </div>
    </div>
  );
}

export default Body;
