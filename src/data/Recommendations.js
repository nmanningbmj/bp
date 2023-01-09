const txRecommendations = [
  {
    header: "Inital",
    recommendations: [
      {
        id: 0,
        title: "suspected bacterial meningitis: presenting in the community",
        recommendations: [
          {
            id: 1,
            type: "1st line",
            recommendation: "urgent hospital transfer",
            icon: false,
          },
          {
            id: 2,
            type: "consider",
            recommendation: "empirical antibiotic prior to hospital transfer",
            icon: false,
          },
        ],
      },
    ],
  },
  {
    header: "Acute",
    recommendations: [
      {
        id: 2,
        title: "confirmed bacterial meningitis: Haemophilus influenzae",
        recommendations: [
          {
            id: 3,
            type: "1st line",
            recommendation: "pathogen-targeted antibiotics",
            icon: false,
          },
          {
            id: 4,
            type: "plus",
            recommendation: "supportive care",
            icon: false,
          },
          {
            id: 5,
            type: "plus",
            recommendation: "corticosteroid",
            icon: false,
          },
        ],
      },
    ],
  },
];

export default txRecommendations;
