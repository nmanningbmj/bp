/* eslint-disable jsx-a11y/anchor-is-valid */
import { React, useEffect, useState } from "react";
import TxContent from "../../../data/TxContent";
import { RightPanel } from "./RightPanel";
import Recommendations from "../Recommendations";

const LeftPanels = () => {
  const [content, setContent] = useState(TxContent);
  const [id, setId] = useState([]);

  function filterId(id) {
    let contentId = id;
    setId((id = contentId));
    console.log(id);
  }

  useEffect(() => {
    const contentPanel = TxContent.find(function (e) {
      return e.id == id;
    });

    console.log("filtered id ", contentPanel);
    setContent(contentPanel);
    console.log(contentPanel);
  }, [id]);

  return (
    <div>
      <div className="treatment-panels">
        <div className="left-panel">
          <Recommendations filterId={filterId} />
        </div>
        <div className="right-panel">
          <RightPanel {...content} />
        </div>
      </div>
    </div>
  );
};

export default LeftPanels;
