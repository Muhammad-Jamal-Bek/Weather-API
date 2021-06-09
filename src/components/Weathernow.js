import React, { Component } from "react";
import partlycloudy from "../img/weather-icons/partlycloudy.svg";


const Weathernow = () => {
    return (
        <div class="first">
        <img src={partlycloudy} alt="clear"/>
        <p>overcast clouds</p>
        <div class="first-text">
        <p><b> Temperature</b> 10&deg; to 11&deg;c</p>
        </div>
        <div class="text-under">
        <p><b>Humidity</b> 78% <b>Pressure</b> 1008.48</p> 
        </div>
        </div>
    )
}
export default Weathernow