const express = require("express");
const app = express();
const mongoose = require("mongoose");
const { MONGOURI } = require("./keys");
const PORT = 5000;

//Connection to MongoDB
mongoose.connect(MONGOURI, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

mongoose.connection.on("connected", () => {
  console.log("Connected to MongoDB");
});

mongoose.connection.on("error", (error) => {
  console.log("Error: " + error);
});

//Models import
require("./models/post");
require("./models/category");
require("./models/comment");

app.use(express.json());

//Router import
app.use(require("./routes/post"));
app.use(require("./routes/category"));
app.use(require("./routes/comment"));

app.listen(PORT, () => {
  console.log("Server is started at " + PORT);
});
