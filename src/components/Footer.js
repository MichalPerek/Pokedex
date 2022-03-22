import React from "react";

const Footer = (props) => {
  return (
    <div className="container__footer">
      <button className="container__footer--button" onClick={props.data}>
        Load more!
      </button>
    </div>
  );
};

export default Footer;
