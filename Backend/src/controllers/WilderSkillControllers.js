const datasource = require("../db");
const Wilder = require("../entity/Wilder");
const Skill = require("../entity/Skill");

module.exports = {
  create: async (req, res) => {
    const wilderId = parseInt(req.params.wilderId);
    const skillId = parseInt(req.params.skillId);
    const wilder = await datasource.getRepository(Wilder).findOneBy({
      id: wilderId,
    });
    if (!wilder) return res.status(404).send("Aucun wilder trouvé");
    const skill = await datasource.getRepository(Skill).findOneBy({
      id: skillId,
    });
    if (!skill) return res.status(404).send("Aucun skill trouvé");

    try {
      wilder.skills = [...wilder.skills, skill];

      await datasource.getRepository(Wilder).save(wilder);
      return res.status(201).send("Skill added to wilder");
    } catch (e) {
      console.error(e);
      return res
        .status(500)
        .json({ error: "Error while creating skill to wilder" });
    }
  },
  delete: async (req, res) => {
    const wilderId = req.params.wilderId;
    const skillId = req.params.skillId;
    const wilder = await datasource.getRepository(Wilder).findOneBy({
      id: wilderId,
    });
    if (!wilder) return res.status(404).send("Aucun wilder trouvé");
    const skill = await datasource.getRepository(Skill).findOneBy({
      id: skillId,
    });
    if (!skill) return res.status(404).send("Aucun skill trouvé");

    try {
      wilder.skills = wilder.skills.filter((e) => e.id !== skill.id);

      await datasource.getRepository(Wilder).save(wilder);
      return res.status(201).send("Skill removed to wilder");
    } catch (e) {
      console.error(e);
      return res
        .status(500)
        .json({ error: "Error while creating skill to wilder" });
    }
  },
};
