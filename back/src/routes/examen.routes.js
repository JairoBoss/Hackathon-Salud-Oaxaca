module.exports = (app) => {
  const router = require("express").Router();
  const { verifyUserToken } = require("../middleware/auth");
  const ExamenController = require("../controllers/examen.controller.js");

  router.post("/", verifyUserToken, ExamenController.create);

  router.get("/", verifyUserToken, ExamenController.findAll);

  router.get("/:id", verifyUserToken, ExamenController.findOne);

  router.put("/:id", verifyUserToken, ExamenController.update);

  router.delete("/:id", verifyUserToken, ExamenController.delete);

  app.use("/api/examen", router);
};
