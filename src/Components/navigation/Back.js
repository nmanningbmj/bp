import React from "react";
import { Link } from "react-router-dom";

const Back = () => {
  return (
    <div>
      <Link to="/">
        <h2 className="mt-4 mb-4">back</h2>
      </Link>
    </div>
  );
};

export default Back;
