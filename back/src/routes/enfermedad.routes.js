module.exports = (app) => {
  const router = require("express").Router();
  const { verifyUserToken } = require("../middleware/auth");
  const EnfermedadController = require("../controllers/enfermedad.controller.js");

  router.post("/", verifyUserToken, EnfermedadController.create);

  router.get("/", verifyUserToken, EnfermedadController.findAll);

  router.get("/:id", verifyUserToken, EnfermedadController.findOne);

  router.put("/:id", verifyUserToken, EnfermedadController.update);

  router.delete("/:id", verifyUserToken, EnfermedadController.delete);

  app.use("/api/enfermedad", router);
};
