const express = require("express");

const PORT = process.env.PORT || 5000;

const app = express();

const cors = require("cors");
app.use(cors());

let s1 = "bonjour";
let s2 = "aurevoir";

app.get("/", (req, res) => {
  res.json({ message: "U asked for: /" });
});

app.get("/api", (req, res) => {
  res.json({ message: "U asked for: /api" });
});

app.get("/s1", (req, res) => {
  res.json(s1);
});

app.get("/s2", (req, res) => {
  res.json(s2);
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
