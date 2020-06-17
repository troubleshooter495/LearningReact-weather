import React from "react";

const SeasonDisplay = (props) => {
  if (props.lat && !props.errorMessage) {
    return <div>Latitude: {props.lat}</div>;
  }

  if (!props.lat && props.errorMessage) {
    return <div>Error: {props.errorMessage}</div>;
  }

  return <div> loading.. </div>;
};

export default SeasonDisplay;
