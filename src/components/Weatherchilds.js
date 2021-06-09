import React, { Children, Component } from "react";
import partlycloudy from "../img/weather-icons/partlycloudy.svg";
import clear from "../img/weather-icons/clear.svg";
import storm from "../img/weather-icons/storm.svg";



const Weatherchilds = () => {
    return (
        <div class="children">
         <div class="three">
         <p>03:00</p>
         <img src={partlycloudy} alt="clear"/>
         <p>8&deg;c </p>
         </div>
         <div class="six">
         <p>06:00</p>
         <img src={partlycloudy} alt="clear"/>
         <p>9&deg;c</p>
         </div>
         <div class="nine">
         <p>09:00</p>
         <img src={clear} alt="clear"/>
         <p>14&deg;c</p>
         </div>
         <div class="twelve">
         <p>12:00</p>
         <img src={clear} alt="clear"/>
         <p>17&deg;c</p>
         </div>
         <div class="fifteen">
         <p>15:00</p>
         <img src={clear} alt="clear"/>
         <p>18&deg;c</p>
         </div>
         <div class="eighteen">
         <p>18:00</p>
         <img src={clear} alt="clear"/>
         <p>16&deg;c</p>
         </div>
         <div class="twenty-one">
         <p>21:00</p>
         <img src={partlycloudy} alt="clear"/>
         <p>13&deg;c</p>
         </div>
        </div>        
    )
}
export default Weatherchilds