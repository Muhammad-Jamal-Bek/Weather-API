import "./App.css";
import React, { Component } from "react";

import storm from "./img/weather-icons/storm.svg"
import clear from "./img/weather-icons/clear.svg"
import cloudy from "./img/weather-icons/cloudy.svg"
import drizzle from "./img/weather-icons/drizzle.svg"
import rain from "./img/weather-icons/rain.svg"
import snow from "./img/weather-icons/snow.svg"
import fog from "./img/weather-icons/fog.svg"
import mostlycloudy from "./img/weather-icons/mostlycloudy.svg"
import partlycloudy from "./img/weather-icons/partlycloudy.svg"

class Search extends React.Component {
  API = " http://api.openweathermap.org/data/2.5/forecast?q=";
  KEY = "&cnt=8&appid=efa7f2a37da09554ff567048f227d924";
  state = {
    input: ""
  };

  render() {
    return (
      <header>
        <form action="">
          <input className="search" type="text" placeholder="Type city name here" />
          <input className="btn" type="button" value="FIND WEATHER" onClick={this.fetchData} />
        </form>
      </header>
    );
  }

  fetchData = () => {
    let city = document.querySelector(".search").value;

    // let city = this.state.input;
    if ((city).trim() === "") {
      alert("please enter a city name");
      return;
    }

    fetch(this.API + city + this.KEY)
      .then(response => response.json())
      .then(data => {
        if (data.cod === 404) { throw "Mispelled City" };
        this.props.getData(data);
        console.log("data:::", data)
        console.log("list:::", data.list)
      }).catch(e => alert(e));
  }
}

class WeatherNow extends Component {
  render() {
    let dataNow = this.props.dataNow;
    return (
      <section className="today-weather">
        <img width="200px" src={this.getImage(dataNow.weather[0].id)} alt="" srcSet="" />
        <p className="weather-now">{dataNow.weather[0].description}</p>
        <div>
          <h2>Temperature</h2>
          <p>{(dataNow.main.temp_min - 273.15).toFixed(2)}ºC to {(dataNow.main.temp_max - 273.15).toFixed(2)}ºC</p>
          <p>
            <span className="today-title">Humidity</span>
            <span className="today-value">{dataNow.main.humidity}%</span>

            <span className="today-title">Pressure</span>
            <span className="today-value">{dataNow.main.pressure}</span>
          </p>
        </div>
      </section>
    );
  }
  getImage = (id) => {
    switch (true) {
      case (id < 300): return storm;
      case (id > 299 && id < 500): return drizzle;
      case (id > 499 && id < 600): return rain;
      case (id > 599 && id < 700): return snow;
      case (id > 699 && id < 800): return fog;
      case (id === 800): return clear;
      case (id === 801): return partlycloudy;
      case (id > 800 && id < 806): return mostlycloudy;
      default: return storm;
    }
  }
}

class WeatherLater extends Component {
  render() {
    return (
      <section className="rest-of-today-weather">
        {this.props.dataLater.slice(1, 8).map((dataLater, index) => {
          return (
            <div>
              <p className="hour">{new Date(dataLater.dt * 1000).getHours()}:00</p>
              <img width="100px" src={this.getImage(dataLater.weather[0].id)} alt="" />
              <p className="temperature">{(dataLater.main.temp - 273.15).toFixed(2)}ºC</p>
            </div>
          )
        })}
      </section>
    );
  }
  getImage = (id) => {
    switch (true) {
      case (id < 300): return storm;
      case (id > 299 && id < 500): return drizzle;
      case (id > 499 && id < 600): return rain;
      case (id > 599 && id < 700): return snow;
      case (id > 699 && id < 800): return fog;
      case (id === 800): return clear;
      case (id === 801): return partlycloudy;
      case (id > 800 && id < 806): return mostlycloudy;
      default: return storm;
    }
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Muhammad Jamal",
      data: []
    };
  }

  handleInputChange = value => {
    this.setState({ name: value });
  };

  render() {
    let renderHTML = () => {
      if (this.state.data.length > 0) {
        return (
          <>
            <WeatherNow dataNow={this.state.data[0]} />
            <WeatherLater dataLater={this.state.data} />
          </>
        );
      } else {
        return (
          <div className="no-data">
            <p>No data to show please search for a city</p>
          </div>
        )
      }
    }

    return (
      <div className="app">
        <Search getData={this.getFilteredData} />
        {renderHTML()}
      </div>
    );
  }

  getFilteredData = ({ list }) => {
    console.log("myList", list);
    this.setState({ data: list });
  }
}

export default App;
