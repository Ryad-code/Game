const express = require("express");
const { PrismaClient } = require("@prisma/client");
const cors = require("cors");

const PORT = process.env.PORT || 5000;

const app = express();

const prisma = new PrismaClient();

app.use(cors());

let s1 = "bonjour";
let s2 = "aurevoir";

app.get("/", (req, res) => {
  res.json({ message: "U asked for: /" });
});

app.post("/users", async (req, res) => {
  const user = await prisma.user.create({
    data: { name: "Ryad", email: "ryad@gmail.com", password: "password" },
  });
  res.json({ user: user });
});

app.get("/api", (req, res) => {
  res.json({ message: "U asked for: /api" });
});

app.get("/users", async (req, res) => {
  const users = await prisma.user.findMany();
  res.json({ users });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
