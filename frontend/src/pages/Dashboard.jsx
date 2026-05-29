import { useEffect, useState } from "react";

import API from "../services/api";

import KPIcard from "../components/KPIcard";
import NewsTable from "../components/NewsTable";
import SentimentPieChart from "../components/SentimentPieChart";

function Dashboard() {

  const [analytics, setAnalytics] = useState({});
  const [news, setNews] = useState([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  const fetchData = () => {

    API.get("/analytics")
      .then((res) => {
        setAnalytics(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

    API.get("/news")
      .then((res) => {
        setNews(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

  };

  useEffect(() => {
    fetchData();
  }, []);

  const filteredNews = news.filter((item) => {

    const matchesSearch =
      item.Title?.toLowerCase().includes(
        search.toLowerCase()
      );

    const matchesFilter =
      filter === "All"
        ? true
        : item.Sentiment === filter;

    return matchesSearch && matchesFilter;

  });

  return (

    <div className="dashboard">

      <h1 className="main-title">
        AI-Powered News Intelligence Dashboard
      </h1>

      <button
        className="refresh-btn"
        onClick={fetchData}
      >
        🔄 Refresh News
      </button>

      <div className="card-grid">

        <KPIcard
          title="Articles"
          value={analytics.total_articles || 0}
        />

        <KPIcard
          title="Positive"
          value={analytics.positive_articles || 0}
        />

        <KPIcard
          title="Negative"
          value={analytics.negative_articles || 0}
        />

        <KPIcard
          title="Neutral"
          value={analytics.neutral_articles || 0}
        />

        <KPIcard
          title="Avg Score"
          value={
            analytics.average_sentiment_score || 0
          }
        />

      </div>

      <div className="chart-section">

        <SentimentPieChart
          analytics={analytics}
        />

      </div>

      <div className="insights-card">

        <h2>AI Insights</h2>

        <ul>

          <li>
            Total Articles:
            {" "}
            {analytics.total_articles || 0}
          </li>

          <li>
            Positive Articles:
            {" "}
            {analytics.positive_articles || 0}
          </li>

          <li>
            Negative Articles:
            {" "}
            {analytics.negative_articles || 0}
          </li>

          <li>
            Neutral Articles:
            {" "}
            {analytics.neutral_articles || 0}
          </li>

          <li>
            Overall sentiment appears
            positive today.
          </li>

        </ul>

      </div>

      <div className="filter-container">

        <input
          type="text"
          placeholder="Search News..."
          className="search-box"
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
        />

        <select
          className="filter-box"
          value={filter}
          onChange={(e) =>
            setFilter(e.target.value)
          }
        >

          <option value="All">
            All
          </option>

          <option value="Positive">
            Positive
          </option>

          <option value="Negative">
            Negative
          </option>

          <option value="Neutral">
            Neutral
          </option>

        </select>

      </div>

      <div className="table-section">

        <NewsTable
          news={filteredNews}
        />

      </div>

    </div>

  );
}

export default Dashboard;