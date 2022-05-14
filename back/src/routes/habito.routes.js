module.exports = (app) => {
  const router = require("express").Router();
  const { verifyUserToken } = require("../middleware/auth");
  const HabitoController = require("../controllers/habito.controller.js");

  router.post("/", verifyUserToken, HabitoController.create);

  router.get("/", verifyUserToken, HabitoController.findAll);

  router.get("/:id", verifyUserToken, HabitoController.findOne);

  router.put("/:id", verifyUserToken, HabitoController.update);

  router.delete("/:id", verifyUserToken, HabitoController.delete);

  app.use("/api/habito", router);
};
