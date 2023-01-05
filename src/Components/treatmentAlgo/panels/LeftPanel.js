/* eslint-disable jsx-a11y/anchor-is-valid */
import { React, useEffect, useState } from "react";
import TxContent from "../../../data/TxContent";
import { RightPanel } from "./RightPanel";
import Recommendations from "../Recommendations";

const LeftPanels = () => {
  const [content, setContent] = useState(TxContent);
  const [id, setId] = useState("1");

  function filterItem(id) {
    let contentId = id;
    setId((id = contentId));
    console.log(id);
  }

  useEffect(() => {
    const contentPanel = TxContent.find(function (e) {
      return e.id == id;
    });
    setContent(contentPanel);
    console.log(contentPanel);
  }, [id]);

  return (
    <div className="left-panel">
      <Recommendations filterItem={filterItem} />
      <RightPanel setItem={content} />
    </div>
  );
};

export default LeftPanels;
