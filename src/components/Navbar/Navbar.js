import React, { useContext, useState } from "react";
import { handleTopBtn, handleBottomBtn } from "./NavbarFunctions";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar__logo">
        <img
          className="navbar__logo--img"
          src="https://www.picng.com/upload/pokeball/png_pokeball_43534.png"
          alt=""
        />
        <div className="navbar__logo--title">Michal's Pokedex</div>
      </div>
      <div className="navbar__buttonContainer">
        <button
          onClick={handleTopBtn}
          className="navbar__buttonContainer--button"
        >
          Go to top
        </button>
        <button
          onClick={handleBottomBtn}
          className="navbar__buttonContainer--button"
        >
          Go to bottom
        </button>
        {/* <button>Display mode</button> */}
      </div>
    </div>
  );
}
