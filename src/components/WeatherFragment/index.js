import React, { Component } from "react";
import WeatherIcon from "../WeatherIcon";
import WeatherSigittarius from "../WeatherSagittarius";
import WeatherTime from "../WeatherTime";
import { fixFont, firstLetterUppercase } from "../../helpers/fixfont";
import "./style.css";

export class WeatherFragment extends Component {
  prettifyDesc(desc) {
    let fixedString = fixFont(desc);
    return firstLetterUppercase(fixedString);
  }
  render() {
    return (
      <li className="weather-fragment">
        <div className="weather-fragment-wrapper">
          <WeatherTime dt={this.props.timeData.dt} />
          <div className="icon-container">
            <WeatherIcon
              id={this.props.timeData.weather[0].id}
              legacyIcon={this.props.timeData.weather[0].icon}
            />
          </div>
          <h2 className="weather-temperature">
            {Math.round(this.props.timeData.main.temp)} °C
          </h2>
          <div>
            {this.prettifyDesc(this.props.timeData.weather[0].description)}
            <br />
            <WeatherSigittarius
              windAngle={this.props.timeData.wind.deg}
              windSpeed={this.props.timeData.wind.speed}
            />
          </div>
        </div>
      </li>
    );
  }
}

export default WeatherFragment;
