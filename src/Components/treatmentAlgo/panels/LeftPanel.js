/* eslint-disable jsx-a11y/anchor-is-valid */
import { React, useEffect, useState } from "react";
import TxContent from "../../../data/TxContent";
import { RightPanel } from "./RightPanel";
import Recommendations from "../Recommendations";

const LeftPanels = () => {
  const [content, setContent] = useState(TxContent);

  function filterItem(id) {
    let contentId = id;
    console.log(contentId);

    const x = TxContent.filter((tx) => tx.id === contentId);

    setContent(x);
    console.log(x);
  }

  useEffect(() => {});

  return (
    <div className="left-panel">
      <Recommendations filterItem={filterItem} />
      <RightPanel setItem={content} />
    </div>
  );
};

export default LeftPanels;
