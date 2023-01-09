/* eslint-disable jsx-a11y/anchor-is-valid */
import { React, useEffect, useState } from "react";
import TxContent from "../../../data/TxContent";
import { RightPanel } from "./RightPanel";
import Recommendations from "../Recommendations";

const LeftPanels = () => {
  const [id, setId] = useState([]);
  const [content, setContent] = useState(TxContent);
  
  function filterId(id) {
    let contentId = id;
    setId((id = contentId));
  }

  useEffect(() => {
    const contentPanel = TxContent.find(function (e) {
      return e.id == id;
    });
    setContent(contentPanel);
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
