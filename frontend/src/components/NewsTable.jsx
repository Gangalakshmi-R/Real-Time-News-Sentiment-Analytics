function NewsTable({ news }) {
  return (
    <table className="news-table">

      <thead>
        <tr>
          <th>Title</th>
          <th>Source</th>
          <th>Sentiment</th>
        </tr>
      </thead>

      <tbody>
        {news.map((item, index) => (
          <tr key={index}>
            <td>{item.Title}</td>
            <td>{item.Source}</td>

            <td>

              <span
                className={
                  item.Sentiment === "Positive"
                    ? "positive"
                    : item.Sentiment === "Negative"
                    ? "negative"
                    : "neutral"
                }
              >
                {item.Sentiment}
              </span>

            </td>
          </tr>
        ))}
      </tbody>

    </table>
  );
}

export default NewsTable;