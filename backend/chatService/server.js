const express = require("express");
const http = require("http");
const mongoose = require("mongoose");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: { origin: "*" }
});

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ Chat DB connected"))
  .catch(err => console.error(err));

io.on("connection", socket => {
  console.log("💬 User connected");

  socket.on("message", msg => {
    io.emit("message", msg);
  });

  socket.on("disconnect", () => {
    console.log("👋 User disconnected");
  });
});

app.get("/health", (req, res) => {
  res.send("Chat Service running");
});

const PORT = process.env.PORT || 3004;
server.listen(PORT, () => {
  console.log(`💬 Chat service on port ${PORT}`);
});
