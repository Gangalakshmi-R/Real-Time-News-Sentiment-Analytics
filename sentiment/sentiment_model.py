import requests
import pandas as pd
from dotenv import load_dotenv
import os

from transformers import pipeline


# -----------------------------
# LOAD ENV VARIABLES
# -----------------------------

load_dotenv()

API_KEY = os.getenv("NEWS_API_KEY")

if not API_KEY:
    raise ValueError("NEWS_API_KEY not found in .env")


# -----------------------------
# LOAD DISTILBERT MODEL
# -----------------------------

print("Loading DistilBERT model...")

classifier = pipeline(
    "sentiment-analysis",
    model="distilbert-base-uncased-finetuned-sst-2-english"
)

print("DistilBERT loaded successfully!")


# -----------------------------
# FETCH NEWS
# -----------------------------

def fetch_news(query="artificial intelligence"):

    url = "https://newsapi.org/v2/everything"

    params = {
        "q": query,
        "language": "en",
        "sortBy": "publishedAt",
        "pageSize": 50,
        "apiKey": API_KEY
    }

    response = requests.get(url, params=params)

    data = response.json()

    return data.get("articles", [])


# -----------------------------
# DISTILBERT SENTIMENT ANALYSIS
# -----------------------------

def get_sentiment(text):

    if not text:
        return "Neutral", 0

    try:

        result = classifier(
            text[:512]
        )[0]

        label = result["label"]
        score = result["score"]

        if label == "POSITIVE":
            sentiment = "Positive"
        else:
            sentiment = "Negative"

        return sentiment, round(score, 3)

    except Exception as e:

        print("Sentiment Error:", e)

        return "Neutral", 0


# -----------------------------
# PROCESS NEWS
# -----------------------------

def process_news(query):

    articles = fetch_news(query)

    records = []

    for article in articles:

        title = article.get(
            "title",
            ""
        )

        description = article.get(
            "description",
            ""
        )

        source = article.get(
            "source",
            {}
        ).get(
            "name",
            ""
        )

        published_at = article.get(
            "publishedAt",
            ""
        )

        full_text = (
            f"{title} {description}"
        )

        sentiment, score = get_sentiment(
            full_text
        )

        records.append({

            "Title": title,

            "Source": source,

            "Published_Date": published_at,

            "Sentiment": sentiment,

            "Sentiment_Score": score

        })

    return pd.DataFrame(records)


# -----------------------------
# MAIN
# -----------------------------

if __name__ == "__main__":

    print(
        "\nFetching latest news..."
    )

    df = process_news(
        "artificial intelligence"
    )

    print(
        "\nSample Results:"
    )

    print(
        df.head()
    )

    os.makedirs(
        "../data",
        exist_ok=True
    )

    df.to_csv(

        "../data/news_sentiment_data.csv",

        index=False

    )

    print(
        "\nNews sentiment data saved successfully!"
    )

    print(
        f"\nTotal Articles: {len(df)}"
    )