const express = require("express");
const cors = require("cors");
require("dotenv").config();
require("dotenv/config.js");

const app = express();
const port = process.env.PORT || 3000;

//Import routes
const confirmRoute = require("./confirm");

app.use(
  cors({
    origin: ["https://martaedaniel2025.com"],
    credentials: true,
  })
);
app.options(
  "*",
  cors({
    origin: ["https://martaedaniel2025.com"],
    credentials: true,
  })
);

//Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", confirmRoute);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
