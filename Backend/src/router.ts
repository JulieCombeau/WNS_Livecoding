import express from "express";

import wildersController from "./controllers/WildersController";
import skillsController from "./controllers/SkillsController";
import wilderSkillControllers from "./controllers/WilderSkillControllers";

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
router.delete("/wilders/:wilderId/skills/:skillId", wilderSkillControllers.delete);

export default router;
