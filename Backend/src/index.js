const express = require("express");
const router = require("./router");
const cors = require("cors");

const datasource = require("./db");

const app = express();

app.use(express.json());
app.use(cors({ origin: "http://localhost:3000" }));
app.use("/api", router);

const start = async () => {
  await datasource.initialize();
  app.listen(5000, () => {
    console.log("listening on port 5000");
  });
};

start();
