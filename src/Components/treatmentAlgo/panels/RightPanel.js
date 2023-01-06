import React from "react";
import DefaultTx from "../DefaultTx";

export const RightPanel = ({ id, header, example }) => {
  if (id === undefined) {
    return <DefaultTx />;
  }

  return (
    <div className="content">
      <p>Recommendation header: {header}</p>
      <h1>Recommendation ID : {id}</h1>
      <p>{example}</p>
    </div>
  );
};
