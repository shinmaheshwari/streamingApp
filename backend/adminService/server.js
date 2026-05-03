const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ Admin DB connected"))
  .catch(err => console.error(err));

app.get("/health", (req, res) => {
  res.send("Admin Service running");
});

const PORT = process.env.PORT || 3003;
app.listen(PORT, () => {
  console.log(`🛠 Admin service on port ${PORT}`);
});
