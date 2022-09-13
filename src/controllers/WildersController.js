const datasource = require("../db");
const Wilder = require("../entity/Wilder");

module.exports = {
  findAll: async (req, res) => {
    try {
      const wilders = await datasource.getRepository(Wilder).find();
      if (!wilders) {
        return res.status(404).send(`There are no wilders yet`);
      }
      return res.status(200).json(wilders);
    } catch (e) {
      return res.status(500).json({ error: "Problème de lecture des wilders" });
    }
  },

  findOne: async (req, res) => {
    const wilderId = req.params.wilderId;
    try {
      const wilder = await datasource.getRepository(Wilder).findOneBy({
        id: wilderId,
      });
      if (!wilder) {
        res.status(404).send("Aucun wilder trouvé");
      } else {
        return res.status(200).send(wilder);
      }
    } catch (e) {
      console.error(e);
      return res.status(500).json({ error: "Problème de lecture du wilder" });
    }
  },

  create: async (req, res) => {
    if (req.body.name.length > 100 || req.body.name.length === 0)
      return res
        .status(422)
        .send("the name should have a length between 1 and 100 characters");
    try {
      const wilderCreated = await datasource
        .getRepository(Wilder)
        .save(req.body);
      return res.status(201).send(wilderCreated);
    } catch (e) {
      console.error(e);
      return res.status(500).json({ error: "Error while creating wilder" });
    }
  },

  updateOne: async (req, res) => {
    const wilderId = req.params.wilderId;
    if (req.body.name.length > 100 || req.body.name.length === 0)
    return res
      .status(422)
      .send("the name should have a length between 1 and 100 characters");
    try {
      const wilderUpdated = await datasource
        .getRepository(Wilder)
        .update(wilderId, req.body);
      if (wilderUpdated.affected === 0) {
        res.status(404).send("Aucun wilder trouvé");
      } else {
        return res.status(200).send("Le wilder a été correctement modifié");
      }
    } catch (e) {
      console.error(e);
      return res
        .status(500)
        .json({ error: "Problème de modification de l'entrée wilder" });
    }
  },

  deleteOne: async (req, res) => {
    const wilderId = req.params.wilderId;
    try {
      const wilderdeleted = await datasource
        .getRepository(Wilder)
        .delete(wilderId);
      if (wilderdeleted.affected === 0) {
        res.status(404).send("Aucun wilder trouvé");
      } else {
        return res.status(200).send("Le wilder a été correctement supprimé");
      }
    } catch (e) {
      console.error(e);
      return res
        .status(500)
        .json({ error: "Problème de suppression du wilder" });
    }
  },
};
