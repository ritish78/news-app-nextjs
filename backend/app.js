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

app.get("/news", (req, res) => {
  const news = db.prepare("SELECT * FROM news").all();
  return res.json(news);
});

seedDb();

app.listen(EXPRESS_SERVER_PORT, () => console.log("Server ready on port", EXPRESS_SERVER_PORT));
