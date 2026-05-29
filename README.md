# 📰 AI-Powered News Intelligence Dashboard using DistilBERT

## 📌 Project Overview

The **AI-Powered News Intelligence Dashboard** is a full-stack analytics platform that fetches live news articles using NewsAPI, performs real-time sentiment analysis using the **DistilBERT Transformer model**, and visualizes insights through an interactive React dashboard.

The platform enables users to monitor current news trends, analyze sentiment distribution, and gain actionable insights from real-time news data.

---

## 🚀 Key Features

* Live news fetching using NewsAPI
* Transformer-based sentiment analysis using DistilBERT
* Real-time news intelligence dashboard
* Interactive KPI cards
* Sentiment distribution visualization
* Search and filter functionality
* News source tracking
* Refresh news functionality
* Responsive UI design
* REST API integration using Flask

---

## 🛠️ Tech Stack

### Frontend

* React.js
* Vite
* Axios
* Recharts
* CSS3

### Backend

* Flask
* Flask-CORS

### AI / NLP

* DistilBERT
* Hugging Face Transformers
* PyTorch

### Data Processing

* Pandas
* Requests

### APIs

* NewsAPI

---

## 📊 Dashboard Features

### KPI Cards

* Total Articles
* Positive Articles
* Negative Articles
* Neutral Articles
* Average Sentiment Score

### Analytics

* Sentiment Distribution Pie Chart
* AI Insights Panel
* News Search Functionality
* Sentiment Filtering

### News Feed

* Article Title
* News Source
* Published Date
* Sentiment Classification

---

## 🧠 AI Model

This project uses:

**DistilBERT**

* Transformer-based NLP model
* Fine-tuned for sentiment analysis
* Faster and lighter version of BERT
* Provides accurate sentiment classification

Sentiment Categories:

* Positive
* Negative

---

## 📂 Project Structure

```text
AI-News-Intelligence-Dashboard

│
├── frontend
│   ├── src
│   │   ├── components
│   │   ├── pages
│   │   ├── services
│   │   ├── App.jsx
│   │   └── App.css
│
├── sentiment
│   ├── sentiment_model.py
│   ├── bert_sentiment.py
│   └── .env
│
├── data
│   └── news_sentiment_data.csv
│
├── app.py
│
├── requirements.txt
│
└── README.md
```

---

## ⚙️ Installation

### Clone Repository

```bash
git clone <repository-url>

cd AI-News-Intelligence-Dashboard
```

---

### Backend Setup

Install dependencies:

```bash
pip install -r requirements.txt
```

or

```bash
pip install flask
pip install flask-cors
pip install pandas
pip install requests
pip install python-dotenv
pip install transformers
pip install torch
```

---

### Environment Variables

Create a `.env` file inside the `sentiment` folder:

```env
NEWS_API_KEY=YOUR_NEWSAPI_KEY
```

Get your API key from:

https://newsapi.org

---

### Frontend Setup

```bash
cd frontend

npm install

npm install axios

npm install recharts
```

---

## ▶️ Running the Project

### Start Backend

```bash
python app.py
```

Backend runs at:

```text
http://127.0.0.1:5000
```

---

### Start Frontend

```bash
cd frontend

npm run dev
```

Frontend runs at:

```text
http://localhost:5173
```

---

## 🔗 API Endpoints

### Home

```http
GET /
```

### Fetch News

```http
GET /news
```

### Dashboard Analytics

```http
GET /analytics
```

### Refresh News

```http
GET /refresh-news
```

### Top Positive News

```http
GET /top-positive
```

### Top Negative News

```http
GET /top-negative
```

---

## 📈 Sample Workflow

```text
NewsAPI
    ↓
Live News Articles
    ↓
DistilBERT Transformer
    ↓
Sentiment Classification
    ↓
Flask REST API
    ↓
React Dashboard
    ↓
Interactive Insights
```

---

## 🎯 Learning Outcomes

* REST API Development
* Frontend-Backend Integration
* Transformer-based NLP
* Real-Time Data Analytics
* Data Visualization
* Sentiment Analysis
* Dashboard Development
* AI-Powered Applications

---

## 🔮 Future Enhancements

* Source-wise analytics
* Word Cloud visualization
* Multi-category news analysis
* Historical sentiment tracking
* AI-generated insights
* User authentication
* Export reports functionality
* Cloud deployment

---

## 👨‍💻 Author

**Gangalakshmi Raja**

Data Analytics | Data Science | Machine Learning | NLP | Full Stack Development

---

## ⭐ Project Highlights

✔ Live News Data Integration
✔ DistilBERT Transformer Model
✔ Real-Time Sentiment Analysis
✔ React + Flask Full-Stack Architecture
✔ Interactive Analytics Dashboard
✔ AI-Powered News Intelligence System
