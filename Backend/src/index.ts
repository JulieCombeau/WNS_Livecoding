import express from "express";
import router from "./router";
import cors from "cors";

import datasource from "./db";

const app = express();

app.use(express.json());
app.use(cors({ origin: "http://localhost:3000" }));
app.use("/api", router);

const start = async (): Promise<void> => {
  await datasource.initialize();
  app.listen(5000, () => {
    console.log("listening on port 5000");
  });
};

void start();
