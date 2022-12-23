import React from "react";
import LeftPanels from "../treatmentAlgo/panels/LeftPanels";
import { RightPanel } from "../treatmentAlgo/panels/RightPanel";
import Back from "../navigation/Back";

const TxAlgo = () => {
  return (
    <div>
      <div className="container">
        <Back />

        <div className="treatment-panels">
          <LeftPanels />
          <RightPanel />
        </div>
      </div>
    </div>
  );
};

export default TxAlgo;
