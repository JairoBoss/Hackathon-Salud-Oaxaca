module.exports = (app) => {
  const router = require("express").Router();
  const { verifyUserToken } = require("../middleware/auth");
  const PerfilMedicoController = require("../controllers/perfilMedico.controller.js");

  router.post("/", verifyUserToken, PerfilMedicoController.create);

  router.get("/", verifyUserToken, PerfilMedicoController.findAll);

  router.get("/:id", verifyUserToken, PerfilMedicoController.findOne);

  router.get("/usuario/:id", verifyUserToken, PerfilMedicoController.findByUserId);

  router.put("/:id", verifyUserToken, PerfilMedicoController.update);

  router.delete("/:id", verifyUserToken, PerfilMedicoController.delete);

  app.use("/api/perfil-medico", router);
};
