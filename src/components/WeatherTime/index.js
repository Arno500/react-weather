import React, { Component } from "react";
import moment from "moment";
import { firstLetterUppercase } from "../../helpers/fixfont";
import "moment/locale/fr";
import "./style.css";

export class WeatherTime extends Component {
  getDay(date) {
    moment(date).locale("fr");
    return firstLetterUppercase(moment(date, "X").format("dddd D/M"));
  }
  getHour(date) {
    moment(date).locale("fr");
    return firstLetterUppercase(moment(date, "X").format("H:mm"));
  }
  render() {
    return (
      <h3 className="weather-day">
        {this.getDay(this.props.dt)}
        <br />
        <span className="weather-hour">{this.getHour(this.props.dt)}</span>
      </h3>
    );
  }
}

export default WeatherTime;
