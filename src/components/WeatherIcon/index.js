import React, { Component } from "react";
import "./style.css";

export class WeatherIcon extends Component {
  getIcon(code, icon) {
    let iconPath = "./icons/";
    switch (code) {
      case 200:
      case 201:
      case 202:
      case 210:
      case 212:
      case 221:
      case 230:
      case 231:
      case 232:
        return iconPath + "thunder.svg";

      case 300:
      case 301:
      case 302:
        return iconPath + "rainy-2.svg";

      case 310:
      case 311:
      case 312:
        return iconPath + "rainy-3.svg";

      case 313:
      case 314:
      case 321:
      case 500:
        return iconPath + "rainy-4.svg";

      case 501:
      case 520:
      case 521:
        return iconPath + "rainy-5.svg";

      case 502:
      case 522:
        return iconPath + "rainy-6.svg";

      case 531:
        return iconPath + "rainy-7.svg";

      case 600:
      case 611:
      case 620: {
        return iconPath + "snow-4.svg";
      }
      case 601:
      case 612:
      case 615:
      case 621: {
        return iconPath + "snow-5.svg";
      }
      case 602:
      case 616:
      case 622: {
        return iconPath + "snow-6.svg";
      }
      default:
    }
    switch (icon) {
      case "01d": {
        return iconPath + "day.svg";
      }
      case "01n": {
        return iconPath + "night.svg";
      }
      case "02d": {
        return iconPath + "cloudy-day-1.svg";
      }
      case "02n": {
        return iconPath + "cloudy-night-1.svg";
      }
      case "03d": {
        return iconPath + "cloudy-day-2.svg";
      }
      case "03n": {
        return iconPath + "cloudy-night-2.svg";
      }
      case "04d": {
        return iconPath + "cloudy-day-3.svg";
      }
      case "04n": {
        return iconPath + "cloudy-night-3.svg";
      }
      default:
        return "https://openweathermap.org/img/w/" + icon + ".png";
    }
  }
  render() {
    return (
      <img
        src={this.getIcon(this.props.id, this.props.legacyIcon)}
        alt=""
        className="weather-icon"
      />
    );
  }
}

export default WeatherIcon;
