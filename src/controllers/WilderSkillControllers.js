const datasource = require("../db");
const Wilder = require("../entity/Wilder");
const Skill = require("../entity/Skill");

module.exports = {
  create: async (req, res) => {
    const wilderId = req.params.wilderId;
    const skillId = req.params.skillId;
    try {
      const wilder = await datasource.getRepository(Wilder).findOneBy({
        id: wilderId,
      });
      const skill = await datasource.getRepository(Skill).findOneBy({
        id: skillId,
      });
      const wilderSkillCreated = [...wilder, skill];
      console.log(wilderSkillCreated);
      await datasource.getRepository(Wilder).save(wilderSkillCreated);
      return res.status(201).send("Skill added to wilder");
    } catch (e) {
      console.error(e);
      return res
        .status(500)
        .json({ error: "Error while creating skill to wilder" });
    }
  },
};
