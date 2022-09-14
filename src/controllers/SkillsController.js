const datasource = require("../db");
const Skill = require("../entity/Skill");

module.exports = {
  findAll: async (req, res) => {
    try {
      const skills = await datasource.getRepository(Skill).find();
      if (!skills) {
        return res.status(404).send(`There are no skills yet`);
      }
      return res.status(200).json(skills);
    } catch (e) {
      return res.status(500).json({ error: "Problème de lecture des skills" });
    }
  },

  findOne: async (req, res) => {
    const skillId = req.params.skillId;
    try {
      const skill = await datasource.getRepository(Skill).findOneBy({
        id: skillId,
      });
      if (!skill) {
        res.status(404).send("Aucun skill trouvé");
      } else {
        return res.status(200).send(skill);
      }
    } catch (e) {
      console.error(e);
      return res.status(500).json({ error: "Problème de lecture du skill" });
    }
  },

  create: async (req, res) => {
    if (req.body.name.length > 100 || req.body.name.length === 0)
      return res
        .status(422)
        .send("the name should have a length between 1 and 100 characters");

    const existingSkill = await datasource
      .getRepository(Skill)
      .findBy({ name: req.body.name });

    if (existingSkill)
      return res.status(409).send("a skill with this name already exists");
    
      try {
      const skillCreated = await datasource.getRepository(Skill).save(req.body);
      return res.status(201).send(skillCreated);
    } catch (e) {
      console.error(e);
      return res.status(500).json({ error: "Error while creating skill" });
    }
  },

  updateOne: async (req, res) => {
    const skillId = req.params.skillId;
    if (req.body.name.length > 100 || req.body.name.length === 0)
      return res
        .status(422)
        .send("the name should have a length between 1 and 100 characters");
    try {
      const skillUpdated = await datasource
        .getRepository(Skill)
        .update(skillId, req.body);
      if (skillUpdated.affected === 0) {
        res.status(404).send("Aucun skill trouvé");
      } else {
        return res.status(200).send("Le skill a été correctement modifié");
      }
    } catch (e) {
      console.error(e);
      return res
        .status(500)
        .json({ error: "Problème de modification de l'entrée skill" });
    }
  },

  deleteOne: async (req, res) => {
    const skillId = req.params.skillId;
    try {
      const skilldeleted = await datasource
        .getRepository(Skill)
        .delete(skillId);
      if (skilldeleted.affected === 0) {
        res.status(404).send("Aucun skill trouvé");
      } else {
        return res.status(200).send("Le skill a été correctement supprimé");
      }
    } catch (e) {
      console.error(e);
      return res
        .status(500)
        .json({ error: "Problème de suppression du skill" });
    }
  },
};
