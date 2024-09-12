const express = require("express");
const { PrismaClient } = require("@prisma/client");
const cors = require("cors");

const PORT = process.env.PORT || 5000;

const app = express();

const prisma = new PrismaClient();

app.use(cors());

app.get("/", (req, res) => {
  res.json({ message: "U asked for: /" });
});

app.get("/test", (req, res) => {
  res.json({ message: "Test route" });
});

app.post("/create/user", async (req, res) => {
  const user = await prisma.user.create({
    data: { name: "Ryad", email: "ryad@gmail.com", password: "password" },
  });
  res.json({ user: user });
});

app.get("/users", async (req, res) => {
  const users = await prisma.user.findMany();
  res.json({ users });
});

app.get("/user/:id", async (req, res) => {
  var userId = parseInt(req.params.id, 10);
  console.log(userId);
  console.log(req.params);
  const user = await prisma.user.findUnique({
    where: {
      id: userId,
    },
  });
  if (!user) res.status().json({ message: "User not found" });
  res.json(user);
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
