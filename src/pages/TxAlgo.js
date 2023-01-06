import React from "react";
import TxMenu from "../components/treatmentAlgo/panels/TxMenu";
import Back from "../layouts/navigation/Back";

const TxAlgo = () => {
  return (
    <div>
      <div className="container">
        <Back />

        <TxMenu />
      </div>
    </div>
  );
};

export default TxAlgo;
