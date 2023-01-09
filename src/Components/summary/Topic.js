import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Topics from "../../data/Topics";
import Back from "../../layouts/navigation/Back";

const Topic = () => {
  const { id } = useParams({});

  const [topic, setTopic] = useState({});

  useEffect(() => {
    const topicPage = Topics.find(function (e) {
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
