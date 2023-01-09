import React from "react";
import txRecommendations from "../../data/Recommendations";

const Recommendations = ({ filterId }) => {
  return (
    <div>
      <div className="recommendations">
        {txRecommendations.map((tx) => {
          return (
            <div key={tx.id}>
              <h1 className="recommendations__header">{tx.header}</h1>

              {tx.recommendations.map((subRecommendations, i) => {
                return (
                  <div className="recommendations__titles-wrap" key={i}>
                    <p className="recommendations__title fw-bold">
                      {subRecommendations.title}
                    </p>

                    {subRecommendations.recommendations.map(
                      (recommendations) => {
                        return (
                          <div>
                            <a
                              className="recommendations__wrapper"
                              id={recommendations.id}
                              onClick={() => filterId(recommendations.id)}
                            >
                              <p
                                className={`${
                                  recommendations.type === "1st line"
                                    ? "recommendations__type--light mb-0"
                                    : "recommendations__type--dark mb-0"
                                }`}
                              >
                                {recommendations.type}
                              </p>
                              <p>{recommendations.recommendation}</p>
                            </a>
                          </div>
                        );
                      }
                    )}
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
