require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const morgan = require("morgan");
const helmet = require("helmet");
const PORT = process.env.PORT;
const MONGO_URL = process.env.REACT_APP_MONGO_URL;
// const path = require("path");
const usersRoute = require("./Routes/UsersRoute");
const authRoute = require("./Routes/AuthRoute");
const postRoute = require("./Routes/PostRoute");

// [Middleware]
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

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

//[Heroku Section]
// if (process.env.NODE_ENV == "production") {
//   app.use(express.static("client/build"));
//   const path = require("path");
//   app.get("*", (req, res) => {
//     res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
//   });
// }

//[Routes]
app.get("/", (req, res) => {
  res.send(`Hello!!`);
});
app.use("/api/users", usersRoute);
app.use("/api/auth", authRoute);
app.use("/api/posts", postRoute);
