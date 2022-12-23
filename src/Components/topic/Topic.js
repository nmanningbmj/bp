import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Data from "../../data/Data";
import Back from "../navigation/Back";

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
      <div className="container">
        <Back />

        <div className="t-summary">
          <h1>{topic.topic}</h1>
          <p>{topic.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Topic;
