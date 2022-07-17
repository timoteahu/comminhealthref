import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../img/logo.png";
import search from "../img/icons/magnifying-glass-solid.svg";
function Navigation() {
  return (
    <header class="flex flex-row justify-center items-center">

    <div class="w-full flex flex-row justify-between items-center" style={{maxWidth: "80em"}} >
        <a href="/"><img src={logo} alt="HELLO" /> </a>

        <div class="menu-btn"></div>

        <div class="navigation">
            <div  class="navigation-items">
                <a href="/">Home</a>
                <a href="/episodes">Episodes</a>
                <a href="/about">About</a>
                <a href="/review">Reviews</a>
                <a href="/search"><img src={search} style={{maxWidth: "1em", display: "inline"}}/></a>
            </div>
        </div>
    </div>



</header>
  );
}

export default Navigation;