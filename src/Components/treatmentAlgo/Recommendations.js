import React from "react";
import txRecommendations from "../../data/Recommendations";

const Recommendations = ({ filterId }) => {
  /*  const x = txData.map((recom) =>
    recom.recommendations.map((sub) => sub.recommendations)
  ); */

  return (
    <div>
      <div className="recommendations">
        {txRecommendations.map((tx) => {
          return (
            <div key={tx.id}>
              <h1 className="recommendations__header">{tx.header}</h1>

              {tx.recommendations.map((recom, i) => {
                return (
                  <div className="recommendations__titles-wrap" key={i}>
                    <p className="recommendations__title fw-bold">
                      {recom.title}
                    </p>

                    {recom.recommendations.map((test) => {
                      return (
                        <div>
                          <a
                            className="recommendations__wrapper"
                            id={test.id}
                            onClick={() => filterId(test.id)}
                          >
                            <p
                              className={`${
                                test.type === "1st line"
                                  ? "recommendations__type--light mb-0"
                                  : "recommendations__type--dark mb-0"
                              }`}
                            >
                              {test.type}
                            </p>
                            <p>{test.recommendation}</p>
                          </a>
                        </div>
                      );
                    })}
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
