module.exports = (app) => {
  const router = require("express").Router();
  const { verifyUserToken } = require("../middleware/auth");
  const MedicamentoController = require("../controllers/medicamento.controller.js");

  router.post("/", verifyUserToken, MedicamentoController.create);

  router.get("/", verifyUserToken, MedicamentoController.findAll);

  router.get("/:id", verifyUserToken, MedicamentoController.findOne);

  router.put("/:id", verifyUserToken, MedicamentoController.update);

  router.delete("/:id", verifyUserToken, MedicamentoController.delete);

  app.use("/api/medicamento", router);
};
