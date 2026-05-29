from flask import Flask, jsonify
from flask_cors import CORS

from sentiment.sentiment_model import process_news

app = Flask(__name__)

CORS(app)


# -----------------------------
# HOME ROUTE
# -----------------------------

@app.route("/")
def home():

    return jsonify({

        "message":
        "AI-Powered News Sentiment Analytics API Running Successfully"

    })


# -----------------------------
# GET ALL NEWS
# -----------------------------

@app.route("/news")
def get_news():

    df = process_news(
        "artificial intelligence"
    )

    return jsonify(

        df.to_dict(
            orient="records"
        )

    )


# -----------------------------
# ANALYTICS
# -----------------------------

@app.route("/analytics")
def analytics():

    df = process_news(
        "artificial intelligence"
    )

    total_articles = len(df)

    positive_articles = len(

        df[
            df["Sentiment"] ==
            "Positive"
        ]

    )

    negative_articles = len(

        df[
            df["Sentiment"] ==
            "Negative"
        ]

    )

    neutral_articles = len(

        df[
            df["Sentiment"] ==
            "Neutral"
        ]

    )

    average_sentiment_score = round(

        df["Sentiment_Score"]
        .mean(),

        3

    )

    return jsonify({

        "total_articles":
        total_articles,

        "positive_articles":
        positive_articles,

        "negative_articles":
        negative_articles,

        "neutral_articles":
        neutral_articles,

        "average_sentiment_score":
        average_sentiment_score

    })


# -----------------------------
# REFRESH NEWS
# -----------------------------

@app.route("/refresh-news")
def refresh_news():

    df = process_news(
        "artificial intelligence"
    )

    df.to_csv(

        "data/news_sentiment_data.csv",

        index=False

    )

    return jsonify({

        "message":
        "News refreshed successfully",

        "articles":
        len(df)

    })


# -----------------------------
# TOP POSITIVE NEWS
# -----------------------------

@app.route("/top-positive")
def top_positive():

    df = process_news(
        "artificial intelligence"
    )

    positive_df = df.sort_values(

        by="Sentiment_Score",

        ascending=False

    )

    return jsonify(

        positive_df
        .head(5)
        .to_dict(
            orient="records"
        )

    )


# -----------------------------
# TOP NEGATIVE NEWS
# -----------------------------

@app.route("/top-negative")
def top_negative():

    df = process_news(
        "artificial intelligence"
    )

    negative_df = df.sort_values(

        by="Sentiment_Score",

        ascending=True

    )

    return jsonify(

        negative_df
        .head(5)
        .to_dict(
            orient="records"
        )

    )


# -----------------------------
# RUN APP
# -----------------------------

if __name__ == "__main__":

    app.run(

        debug=True,

        host="0.0.0.0",

        port=5000

    )