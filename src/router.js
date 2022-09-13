const express = require("express");

const wildersController = require("./controllers/WildersController");
const skillsController = require("./controllers/SkillsController");
const wilderSkillControllers = require("./controllers/WilderSkillControllers");

const router = express.Router();

// Routes wilders
router.get("/wilders", wildersController.findAll);
router.get("/wilders/:wilderId", wildersController.findOne);
router.post("/wilders", wildersController.create);
router.put("/wilders/:wilderId", wildersController.updateOne);
router.delete("/wilders/:wilderId", wildersController.deleteOne);

// Routes skills
router.get("/skills", skillsController.findAll);
router.get("/skills/:skillId", skillsController.findOne);
router.post("/skills", skillsController.create);
router.put("/skills/:skillId", skillsController.updateOne);
router.delete("/skills/:skillId", skillsController.deleteOne);

// Routes wilders_skills
router.post("/wilders/:wilderId/skills/:skillId", wilderSkillControllers.create);

module.exports = router;
