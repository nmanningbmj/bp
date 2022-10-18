import React from "react";
import Data from "../../data/Data";
import { Routes, Route, Link } from "react-router-dom";

const TopicList = () => {
  return (
    <div>
      {Data.map((topic, i) => (
        <Link to={`topic/${topic.id}`}>
          <div className="" key={i}>
            <p> {topic.topic}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default TopicList;
