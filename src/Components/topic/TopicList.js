import React from "react";
import Data from "../../data/Data";
import TxContent from "../../data/TxContent";
import { Routes, Route, Link } from "react-router-dom";

const TopicList = () => {
  console.log(TxContent);

  return (
    <div>
      <div className="container">
        {Data.map((topic, i) => (
          <Link to={`topic/${topic.id}`}>
            <div className="" key={i}>
              <p> {topic.topic}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TopicList;
