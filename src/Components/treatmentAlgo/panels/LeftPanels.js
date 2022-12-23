import React from "react";
import TxContent from "../../../data/TxContent";

const LeftPanels = () => {
  return (
    <div className="left-panel">
      <div className="recommendations">
        {TxContent.map((tx, i) => (
          <div className="" key={i}>
            <p className="recommendations__header"> {tx.header}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LeftPanels;
