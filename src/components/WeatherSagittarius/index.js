import React, { Component } from "react";
import "./style.css";

export class WeatherSagittarius extends Component {
  getWindAngleStyle(givenAngle) {
    return { transform: "rotate(" + ((givenAngle - 60) % 360) + "deg)" };
  }
  getWindSpeedInKmh(wspeed) {
    return Math.round(wspeed * 3.6);
  }
  render() {
    return (
      <div>
        <img
          src="./icons/weather_sagittarius.svg"
          alt=""
          className="weather-wind-icon"
          style={this.getWindAngleStyle(this.props.windAngle)}
        />
        <span className="weather-wind-speed">
          {this.getWindSpeedInKmh(this.props.windSpeed)} km/h
        </span>
      </div>
    );
  }
}

export default WeatherSagittarius;
