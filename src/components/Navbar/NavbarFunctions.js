import React from "react";

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

export { handleBottomBtn, handleTopBtn };
