const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");

const app = express();

const errorHandler = require("./_helpers/errorHandler"); // Для ошибок
/* const config = require("./config/config");
const db = require("./utils/connectDB"); */

const port = 7777;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ extended: true }));
app.use(cors());
app.use(morgan());

app.use("/api", require("./api/api.controller")); // Контроллер всех api запросов

app.all("*", (req, res) => {
  res.status(404).json({ message: "Page not found" });
});

app.use(errorHandler);

app.listen(process.env.PORT || port, () => {
  console.log(`AuroraBack app listening on port ${port}`);
});

/* db(config)
  .then(() => {
    console.log('MongoDB connected!');
    app.listen(process.env.PORT || port, () => {
      console.log(`AuroraBack app listening on port ${port}`);
    });
  })
  .catch(err => {
    console.log(err);
  }); */
