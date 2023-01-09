import React from "react";
import DefaultTx from "../DefaultTx";

export const RightPanel = ({ id, content }) => {
  if (id === undefined) {
    return <DefaultTx />;
  }

  return (
    <div className="content">
      <h1>id:{id}</h1>
      <p>{content}</p>
    </div>
  );
};
