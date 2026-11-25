const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());          
app.use(express.json());  

app.use((req, res, next) => {
  console.log(req.method, req.url);
  next();
});

let events = [
  { id: 1, title: "Coding Night", date: "Oct 20", place: "Lab 3" },
  { id: 2, title: "Web Workshop", date: "Oct 27", place: "Room B12" },
  { id: 3, title: "Career Talk", date: "Nov 3", place: "Main Hall" },
  { id: 4, title: "Hackathon", date: "Nov 10", place: "Lab 1" },
  { id: 5, title: "Game Night", date: "Nov 17", place: "Cafeteria" },
  { id: 6, title: "Demo Day", date: "Nov 24", place: "Auditorium" }
];

app.get("/api/events", (req, res) => {
  res.json(events);
});

app.get("/api/events/:id", (req, res) => {
  const id = Number(req.params.id);
  const event = events.find(e => e.id === id);
  if (!event) {
    return res.status(404).json({ error: "Event not found" });
  }
  res.json(event);
});

app.post("/api/events", (req, res) => {
  const { title, date, place } = req.body ?? {};
  if (!title || !date) {
    return res.status(400).json({ error: "title and date are required" });
  }
  const event = { id: Date.now(), title, date, place: place ?? "" };
  events.push(event);
  res.status(201).json(event);
});

app.put("/api/events/:id", (req, res) => {
  const event = events.find(e => e.id === Number(req.params.id));
  if (!event) {
    return res.status(404).json({ error: "Event not found" });
  }
  const body = req.body ?? {};
  event.title = body.title ?? event.title;
  event.date = body.date ?? event.date;
  event.place = body.place ?? event.place;
  res.json(event);
});

app.delete("/api/events/:id", (req, res) => {
  const id = Number(req.params.id);
  if (!events.some(e => e.id === id)) {
    return res.status(404).json({ error: "Event not found" });
  }
  events = events.filter(e => e.id !== id);
  res.status(204).end();
});

app.listen(3000, () => console.log("Server on http://localhost:3000"));