const Usuario = require("../models/usuario.model.js");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
require("dotenv").config();

exports.create = async (req, res) => {  
  if (!req.body.nombre) {
    res.status(400).send({
      message: "El trabajador debe de tener un nombre",
    });
    return;
  }
  const salt = await bcrypt.genSalt(10);
  const hasPassword = await bcrypt.hash(req.body.contraseña, salt);

  const usuarioNuevo = new Usuario({
    nombre: req.body.nombre,
    correo: req.body.correo,
    contraseña: hasPassword
  });

  usuarioNuevo.save((err, usuarioNuevo) => {
    if (err) {
      console.log(err);
      res.status(500).send({
        message:
          err.message ||
          `Ocurrio un error al tratar de crear al usuario ${req.body.nombre}`,
      });
    } else {
      let payload = {
        id: usuarioNuevo._id,
        correo: req.body.correo,
      };
      const token = jwt.sign(payload, process.env.TOKEN_SECRET);
      res.status(200).send({ usuarioNuevo, token });
    }
  });
};

exports.login = async (req, res) => {
  Usuario.findOne({ correo: req.body.correo }, async (err, user) => {
    console.log(user);
    if (err) {
      console.log(err);
    } else {
      if (user) {
        const validPass = await bcrypt.compare(
          req.body.contraseña,
          user.contraseña
        );
        if (!validPass)
          return res.status(401).send("Correo o contraseña incorrectas");

        let payload = { id: user._id, correo: user.correo };
        const token = jwt.sign(payload, process.env.TOKEN_SECRET);

        res
          .status(200)
          .header("auth-token", token)
          .send({ token: token, user });
      } else {
        res.status(401).send("Datos no validos");
      }
    }
  });
};

exports.findAll = (req, res) => {
  Usuario.find()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message ||
          "Ocurrio un erro al tratar de recuperar todos los usuarios.",
      });
    });
};

exports.findOne = (req, res) => {
  Usuario.findById(req.params.id)
    .then((data) => {
      if (!data) {
        return res.status(404).send({
          message: `Usuario con id: ${req.params.id} no encontrado`,
        });
      }
      res.send(data);
    })
    .catch((err) => {
      if (err.kind === "ObjectId") {
        return res.status(404).send({
          message: `Usuarios con id: ${req.params.id} no encontrado`,
        });
      }
      return res.status(500).send({
        message: `Error al recuperar datos del usuarios con id: ${req.params.id}.`,
      });
    });
};

exports.update = (req, res) => {
  Usuario.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((data) => {
      if (!data) {
        return res.status(404).send({
          message: `Usuario con id: ${req.params.id}, no encontrado`,
        });
      }
      res.send(data);
    })
    .catch((err) => {
      if (err.kind === "ObjectId") {
        return res.status(404).send({
          message: `Usuario con id: ${req.params.id}, no encontrado`,
        });
      }
      return res.status(500).send({
        message: `Error al actualizar el usuario con id: ${req.params.id}`,
      });
    });
};

exports.delete = (req, res) => {
  Usuario.findByIdAndRemove(req.params.id)
    .then((data) => {
      if (!data) {
        return res.status(404).send({
          message: `Usuario con id: ${req.params.id}, no encontrado`,
        });
      }
      res.send({ message: "Usuario eliminado con exito!" });
    })
    .catch((err) => {
      if (err.kind === "ObjectId" || err.name === "NotFound") {
        return res.status(404).send({
          message: `Usuario con id: ${req.params.id}, no encontrado`,
        });
      }
      return res.status(500).send({
        message: `Ocurrio un error al eliminar al usuario con id: ${req.params.id}.`,
      });
    });
};
