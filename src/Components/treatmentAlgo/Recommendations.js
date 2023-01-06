import React from "react";
import TxContent from "../../data/TxContent";

const Recommendations = ({ filterId }) => {
  return (
    <div>
      <div className="recommendations">
        {TxContent.map((tx) => {
          return (
            <div key={tx.id}>
              <h1 className="recommendations__header">{tx.header}</h1>

              {tx.recommendations.map((recom, i) => {
                return (
                  <div className="recommendations__titles-wrap" key={i}>
                    <p className="recommendations__title fw-bold">
                      {recom.title}
                    </p>

                    <a
                      className="recommendations__wrapper"
                      id={recom.id}
                      onClick={() => filterId(1)}
                    >
                      <span
                        className={`${
                          recom.type === "1st line"
                            ? "recommendations__type--light"
                            : "recommendations__type--dark"
                        }`}
                      >
                        {recom.type}
                      </span>

                      <p>{recom.recommendation}</p>
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
