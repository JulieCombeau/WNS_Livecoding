const express = require("express");

const wildersController = require("./controllers/WildersController");

const router = express.Router();

router.get("/wilder", wildersController.findAll);
router.get("/wilder/:wilderId", wildersController.findOne);
router.post("/wilder", wildersController.create);
router.put("/wilder/:wilderId", wildersController.updateOne);
router.delete("/wilder/:wilderId", wildersController.deleteOne);
