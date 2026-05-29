import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend
} from "recharts";

function SentimentPieChart({ analytics }) {

  const data = [
    {
      name: "Positive",
      value: analytics.positive_articles || 0
    },
    {
      name: "Negative",
      value: analytics.negative_articles || 0
    },
    {
      name: "Neutral",
      value: analytics.neutral_articles || 0
    }
  ];

  const COLORS = [
    "#4CAF50",
    "#F44336",
    "#FFD600"
  ];

  return (
    <div className="chart-card">

      <h2>Sentiment Distribution</h2>

      <PieChart width={450} height={350}>

        <Pie
          data={data}
          dataKey="value"
          outerRadius={120}
          label
        >

          {data.map((entry, index) => (
            <Cell
              key={index}
              fill={COLORS[index]}
            />
          ))}

        </Pie>

        <Tooltip />

        <Legend />

      </PieChart>

    </div>
  );
}

export default SentimentPieChart;