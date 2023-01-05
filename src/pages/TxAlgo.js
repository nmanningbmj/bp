import React from "react";
import LeftPanels from "../components/treatmentAlgo/panels/LeftPanel";
import { RightPanel } from "../components/treatmentAlgo/panels/RightPanel";
import Back from "../layouts/navigation/Back";

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
