import React, { Component } from "react";
import { fixFont } from "../../helpers/fixfont";
import WeatherFragment from "../WeatherFragment";
import "./style.css";

class WeatherList extends Component {
  render() {
    if (this.props.city === null || this.props.timeList === null) {
      return null;
    }
    return (
      <div>
        <h2 className="city">
          {fixFont(this.props.city.name)}, {this.props.city.country}
        </h2>
        <ul className="weather-container">
          {this.props.timeList.map(time => {
            return <WeatherFragment timeData={time} key={time.dt} />;
          })}
        </ul>
      </div>
    );
  }
}

export default WeatherList;
