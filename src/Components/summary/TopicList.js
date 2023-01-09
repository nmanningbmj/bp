import React from "react";
import Topics from "../../data/Topics";
import { Link } from "react-router-dom";

const TopicList = () => {
  return (
    <div>
      <div className="container">
        {Topics.map((topic, i) => (
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
