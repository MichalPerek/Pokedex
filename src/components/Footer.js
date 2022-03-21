import React from "react";

const Footer = (props) => {
  return (
    <div className="footer">
      <button className="button__loadMore" onClick={props.data}>
        Load more!
      </button>
    </div>
  );
};

export default Footer;
