from transformers import pipeline

classifier = pipeline(
    "sentiment-analysis",
    model="distilbert-base-uncased-finetuned-sst-2-english"
)

def get_sentiment(text):

    if not text:
        return "Neutral", 0

    result = classifier(text[:512])[0]

    label = result["label"]
    score = result["score"]

    if label == "POSITIVE":
        sentiment = "Positive"
    else:
        sentiment = "Negative"

    return sentiment, round(score, 3)