const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ Auth DB connected"))
  .catch(err => console.error(err));

app.get("/health", (req, res) => {
  res.send("Auth Service running");
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`🚀 Auth service on port ${PORT}`);
});
