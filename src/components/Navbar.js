import React, { Component } from "react";

const Navbar = () => {
    return (
    <header>
        <div>
            <input type="text" id="city" name="city" defaultValue="london"></input>
            <button> Find weather</button>
        </div>
    </header>
    )
}
export default Navbar