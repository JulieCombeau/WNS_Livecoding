import datasource from "../db";
import { Wilder } from "../entity/Wilder";
import { Skill } from "../entity/Skill";
import { Grade } from "../entity/Grade";
import { IController } from "../types/IController";


const WilderSkillController: IController = {
  create: async (req, res) => {
    const wilderId = parseInt(req.params.wilderId);
    const skillId = parseInt(req.params.skillId);

    const wilder = await datasource.getRepository(Wilder).findOneBy({
      id: wilderId,
    });
    if (wilder === null) return res.status(404).send("Aucun wilder trouvé");
    
    const skill = await datasource.getRepository(Skill).findOneBy({
      id: skillId,
    });
    if (skill === null) return res.status(404).send("Aucun skill trouvé");
    
    try {
      await datasource.getRepository(Grade).insert({wilder, skill});
      return res.status(201).send("Skill added to wilder");
    } catch (e) {
      console.error(e);
      return res
        .status(500)
        .json({ error: "Error while creating skill to wilder" });
    }
  },

  delete: async (req, res) => {
    const wilderId = parseInt(req.params.wilderId);
    const skillId = parseInt(req.params.skillId);

    const wilder = await datasource.getRepository(Wilder).findOneBy({
      id: wilderId,
    });
    if (wilder === null) return res.status(404).send("Aucun wilder trouvé");
    
    const skill = await datasource.getRepository(Skill).findOneBy({
      id: skillId,
    });
    if (skill === null) return res.status(404).send("Aucun skill trouvé");

    try {
      await datasource.getRepository(Grade).delete({wilderId: wilder.id, skillId: skill.id});
      return res.status(201).send("Skill removed to wilder");
    } catch (e) {
      console.error(e);
      return res
        .status(500)
        .json({ error: "Error while creating skill to wilder" });
    }
  },
};

export default WilderSkillController;