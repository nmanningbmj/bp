import React from "react";

export const RightPanel = ({ id, header }) => {
  return (
    <div className="right-panel">
      <p>HEADER: {header}</p>
      <h1>RECOMMENDATION ID : {id}</h1>
    </div>
  );
};
