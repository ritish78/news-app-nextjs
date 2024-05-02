import express from "express";
import sqlite from "better-sqlite3";
import cors from "cors";
import { v4 as uuidv4 } from "uuid";
import { newsList } from "./seed.js";

const app = express();

app.use(cors());

const EXPRESS_SERVER_PORT = 5000;

const db = sqlite("data.db");

function seedDb() {
  db.prepare(
    "CREATE TABLE IF NOT EXISTS news(id TEXT PRIMARY KEY, slug TEXT NOT NULL, title TEXT NOT NULL, image TEXT, content TEXT NOT NULL, date DATE NOT NULL);"
  ).run();

  const { count } = db.prepare("SELECT count(*) as count FROM news").get();

  if (count === 0) {
    const insert = db.prepare(
      "INSERT INTO news(id, slug, title, image, content, date) VALUES(?, ?, ?, ?, ?, ?)"
    );

    newsList.forEach((news) => {
      insert.run(news.id, news.slug, news.title, news.image, news.content, news.date);
    });
  }
}

app.get("/api/news", (req, res) => {
  const news = db.prepare("SELECT * FROM news").all();
  return res.json(news);
});

app.get("/api/news/latest", (req, res) => {
  const news = db.prepare("SELECT * FROM news LIMIT 3").all();
  return res.json(news);
});

app.get("/api/news/year-list", (req, res) => {
  const years = db
    .prepare("SELECT DISTINCT strftime('%Y', date) as year FROM news")
    .all()
    .map((year) => year.year);

  return res.send(years);
});

app.get("/api/news/year-month-list/:year", (req, res) => {
  const monthList = db
    .prepare("SELECT DISTINCT strftime('%m', date) as month FROM news WHERE strftime('%Y', date) = ?")
    .all(req.params.year)
    .map((month) => month.month);

  return res.send(monthList);
});

app.get("/api/news/slug/:slug", (req, res) => {
  const newsList = db.prepare("SELECT * FROM news WHERE slug = ?").all(req.params.slug);

  return res.send(newsList[0]);
});

app.get("/api/news/:year", (req, res) => {
  const newsList = db
    .prepare("SELECT * FROM news WHERE strftime('%Y', date) = ? ORDER BY date DESC")
    .all(req.params.year);

  return res.send(newsList);
});

app.get("/api/news/:year/:month", (req, res) => {
  const news = db
    .prepare(
      "SELECT * FROM news WHERE strftime('%Y', date) = ? AND strftime('%m', date) = ? ORDER BY date DESC"
    )
    .all(req.params.year, req.params.month);

  return res.send(news);
});

seedDb();

app.listen(EXPRESS_SERVER_PORT, () => console.log("Server ready on port", EXPRESS_SERVER_PORT));
