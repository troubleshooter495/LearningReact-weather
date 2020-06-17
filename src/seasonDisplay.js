import React from "react";
import "./seasonDisplay.css";

const SeasonConfig = {
  summer: {
    text: "let's hit the beach!",
    icon: "massive sun icon",
  },
  winter: {
    text: "bruh, it's chilly..",
    icon: "massive snowflake icon",
  },
};

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat < 0 ? "summer" : "winter";
  }
};

const SeasonDisplay = (props) => {
  const season = getSeason(props.lat, new Date().getMonth());
  const { text, icon } = SeasonConfig[season];
  
  return (
    <div className={`season-display ${season}`}>
      <i className={`icon-left ${icon}`} />
      <h1>{text}</h1>
      <i className={`icon-right ${icon}`} />
    </div>
  );
};

export default SeasonDisplay;
