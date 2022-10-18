import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Data from "../../data/Data";
import { Routes, Route, Link } from "react-router-dom";

const Topic = () => {
  const { id } = useParams({});

  const [topic, setTopic] = useState({});

  useEffect(() => {
    const topicPage = Data.find(function (e) {
      return e.id == id;
    });
    setTopic(topicPage);
  }, [id]);

  return (
    <div>
      <Link to="/">
        <h2>back</h2>
      </Link>

      <div className="t-summary">
        <h1>{topic.topic}</h1>
        <p>{topic.description}</p>
      </div>
    </div>
  );
};

export default Topic;
