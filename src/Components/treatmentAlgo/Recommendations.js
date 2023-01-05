import React from "react";
import TxContent from "../../data/TxContent";

const Recommendations = ({ filterItem }) => {
  return (
    <div>
      <div className="recommendations">
        {TxContent.map((tx) => {
          return (
            <div key={tx.id}>
              <h1 className="recommendations__header">{tx.header}</h1>

              {tx.recommendations.map((sub, i) => {
                return (
                  <div className="recommendations__titles-wrap" key={i}>
                    <p className="recommendations__title fw-bold">
                      {sub.title}
                    </p>

                    <a
                      className="recommendations__wrapper"
                      id={sub.id}
                      onClick={() => filterItem(sub.id)}
                    >
                      <span
                        className={`${
                          sub.type === "1st line"
                            ? "recommendations__type--light"
                            : "recommendations__type--dark"
                        }`}
                      >
                        {sub.type}
                      </span>

                      <p>{sub.recommendation}</p>
                    </a>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Recommendations;
