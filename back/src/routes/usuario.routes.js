module.exports = (app) => {
  const router = require("express").Router();
  const { verifyUserToken } = require("../middleware/auth");
  const TrabajadorController = require("../controllers/usuario.controller.js");

  router.post("/", TrabajadorController.create);

  router.get("/", verifyUserToken, TrabajadorController.findAll);

  router.post("/login", TrabajadorController.login);

  router.get("/:id", verifyUserToken, TrabajadorController.findOne);

  router.put("/:id", verifyUserToken, TrabajadorController.update);

  router.delete("/:id", verifyUserToken, TrabajadorController.delete);

  app.use("/api/usuario", router);
};
