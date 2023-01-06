import React from "react";
import LeftPanels from "../components/treatmentAlgo/panels/LeftPanel";
import Back from "../layouts/navigation/Back";

const TxAlgo = () => {
  return (
    <div>
      <div className="container">
        <Back />

        <LeftPanels />
      </div>
    </div>
  );
};

export default TxAlgo;
