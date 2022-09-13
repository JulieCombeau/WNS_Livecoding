const express = require("express");
const router = require("./router");

const datasource = require("./db");

const app = express();

app.use(express.json());

app.use("/api", router);

const start = async () => {
  await datasource.initialize();
  app.listen(3000, () => {
    console.log("listening on port 3000");
  });
};

start();
