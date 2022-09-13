const express = require("express");
// const router = require("./router");

const datasource = require("./db");
const wildersController = require("./controllers/WildersController");

const app = express();

app.use(express.json());

// app.use("/api", router);

app.get("/api/wilder", wildersController.findAll);
app.get("/api/wilder/:wilderId", wildersController.findOne);
app.post("/api/wilder", wildersController.create);
app.put("/api/wilder/:wilderId", wildersController.updateOne);
app.delete("/api/wilder/:wilderId", wildersController.deleteOne);

const start = async () => {
  await datasource.initialize();
  app.listen(3000, () => {
    console.log("listening on port 3000");
  });
};

start();
