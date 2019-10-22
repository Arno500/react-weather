import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
import WeatherList from "./components/WeatherList";
import MapComp from "./components/MapComp";

class App extends Component {
  constructor() {
    super();
    this.state = {
      city: "",
      cityInfos: "",
      listResult: null
    };
    this.setCity = this.setCity.bind(this);
    this.onSearch = this.onSearch.bind(this);
  }

  setCity(event) {
    this.setState({ city: event.target.value });
  }

  onSearch(event) {
    event.preventDefault();
    if (this.state.city && this.state.city !== "") {
      fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${encodeURIComponent(
          this.state.city
        )}&units=metric&lang=fr&appid=9f7596957f2dc239d408999f7f8da2f1`
      ).then(response => {
        if (response.status === 200) {
          response.json().then(json => {
            this.setState({
              cityInfos: json.city,
              listResult: json.list
            });
          });
        } else if (response.status === 404) {
          alert("La ville " + this.state.city + " n'existe pas !");
        } else {
          alert("Une erreur est survenue");
        }
      });
    } else {
      alert("Merci d'entrer une ville");
    }
  }

  render() {
    return (
      <div className="App">
        <h1>
          Quel temps va-t-il faire à{" "}
          <form onSubmit={this.onSearch} className="form-ville">
            <label htmlFor="ville" className="hidden-label">
              Ville :
            </label>
            <input
              type="text"
              name="ville"
              onChange={this.setCity}
              placeholder="Ville"
              className="input-ville"
            />
            <button type="submit" className="button-ville">
              ?
            </button>
          </form>
        </h1>

        <MapComp loc={this.state.cityInfos.coord} />
        <WeatherList
          city={this.state.cityInfos}
          timeList={this.state.listResult}
        />
      </div>
    );
  }
}

export default App;
