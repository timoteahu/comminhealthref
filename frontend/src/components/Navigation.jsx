import React, {useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import logo from "../img/logo.png";

function Navigation() {
  return (
    <header class="flex flex-row justify-center items-center">

    <div class="w-full flex flex-row justify-between items-center" style={{maxWidth: "80em"}} >
        <a href="/"><img src={logo} alt="HELLO" /> </a>

        <div class="menu-btn"></div>

        <div class="navigation">
            <div  class="navigation-items" style={{overflowY: "hidden"}}>
                <a href="/">Home</a>
                <a href="/episodes">Episodes</a>
                <a href="/about">About</a>
                <a href="/reviews">Reviews</a>
            </div>
        </div>
    </div>




</header>
  );
}

export default Navigation;