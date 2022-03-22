import React, { useContext, useState } from "react";

export default function Navbar() {
  //Function to handle click event on top button
  const handleTopBtn = () => {
    scrollToTop();
  };

  //Function to scroll to top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  //Function to handle click event on bottom button
  const handleBottomBtn = () => {
    scrollToBottom();
  };

  //Function to scroll to top of the page
  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

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
