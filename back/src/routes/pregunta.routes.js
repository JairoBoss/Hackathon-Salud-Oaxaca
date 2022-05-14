module.exports = (app) => {
  const router = require("express").Router();
  const { verifyUserToken } = require("../middleware/auth");
  const PreguntaController = require("../controllers/pregunta.controller.js");

  router.post("/", verifyUserToken, PreguntaController.create);

  router.get("/", verifyUserToken, PreguntaController.findAll);

  router.get("/:id", verifyUserToken, PreguntaController.findOne);

  router.put("/:id", verifyUserToken, PreguntaController.update);

  router.delete("/:id", verifyUserToken, PreguntaController.delete);

  app.use("/api/pregunta", router);
};
