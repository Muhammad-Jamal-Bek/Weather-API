import React, { Children, Component } from "react";

import fakeWeatherData from "./fakeWeatherData.json";
import storm from "../src/img/weather-icons/storm.svg";
import clear from "../src/img/weather-icons/clear.svg";
import partlycloudy from "../src/img/weather-icons/partlycloudy.svg";
import Navbar from "./components/Navbar";
import Weathernow from "./components/Weathernow";
import Weatherchilds from "./components/Weatherchilds";



import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Karim"
    };
  }

  handleInputChange = value => {
    this.setState({ name: value });
  };

  render() {
    return (
      <div className="app">
              <Navbar/>
              <Weathernow/>
              <Weatherchilds/>
      </div>
    );
  }
} 

export default App;
