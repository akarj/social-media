require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const PORT = process.env.PORT;
const MONGO_URL = process.env.REACT_APP_MONGO_URL;
const path = require("path");

// [Middleware]
app.use(express.json());

//[Mongo DB Connection]
(async () => {
  try {
    await mongoose.connect(MONGO_URL);
    console.log("[!!] Database Connected...");
    app.listen(PORT, () =>
      console.log(`[!!] Backend Server is running on port ${PORT}!!`)
    );
  } catch (err) {
    console.log("Failed to connect to MongoDB", err);
  }
})();

if (process.env.NODE_ENV == "production") {
  app.use(express.static("client/build"));
  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.get("/", (req, res) => {
  res.send(`Hello!!`);
});
