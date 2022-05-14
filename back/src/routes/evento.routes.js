module.exports = (app) => {
  const router = require("express").Router();
  const { verifyUserToken } = require("../middleware/auth");
  const EventoController = require("../controllers/evento.controller.js");

  router.post("/", verifyUserToken, EventoController.create);

  router.get("/", verifyUserToken, EventoController.findAll);

  router.get("/:id", verifyUserToken, EventoController.findOne);

  router.put("/:id", verifyUserToken, EventoController.update);

  router.delete("/:id", verifyUserToken, EventoController.delete);

  app.use("/api/evento", router);
};
