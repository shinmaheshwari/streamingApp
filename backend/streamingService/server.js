const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ Streaming DB connected"))
  .catch(err => console.error(err));

app.get("/health", (req, res) => {
  res.send("Streaming Service running");
});

const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
  console.log(`🎬 Streaming service on port ${PORT}`);
});
