const Usuario = require("../models/usuario.model.js");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
require("dotenv").config();

exports.create = async (req, res) => {  
  if (!req.body.Nombre) {
    res.status(400).send({
      message: "El trabajador debe de tener un nombre",
    });
    return;
  }
  const salt = await bcrypt.genSalt(10);
  const hasPassword = await bcrypt.hash(req.body.Contraseña, salt);

  const usuarioNuevo = new Usuario({
    Nombre: req.body.Nombre,
    Apellido_Paterno: req.body.Apellido_Paterno,
    Apellido_Materno: req.body.Apellido_Materno,
    Direccion: req.body.Direccion,
    Sexo: req.body.Sexo,
    Telefono: req.body.Telefono,
    Fecha_Nacimiento: req.body.Fecha_Nacimiento,
    Lugar_Nacimiento: req.body.Lugar_Nacimiento,
    Peso: req.body.Peso,
    Cintura: req.body.Cintura,
    Altura: req.body.Altura,
    Tipo_Sangre: req.body.Tipo_Sangre,
    Alergias: req.body.Alergias,
    Donador: req.body.Donador,
    Correo: req.body.Correo,
    Contraseña: hasPassword
  });

  usuarioNuevo.save((err, usuarioNuevo) => {
    if (err) {
      console.log(err);
      res.status(500).send({
        message:
          err.message ||
          `Ocurrio un error al tratar de crear al usuario ${req.body.Nombre}`,
      });
    } else {
      let payload = {
        id: usuarioNuevo._id,
        correo: req.body.Correo,
      };
      const token = jwt.sign(payload, process.env.TOKEN_SECRET);
      res.status(200).send({ usuarioNuevo, token });
    }
  });
};

exports.login = async (req, res) => {
  Usuario.findOne({ Correo: req.body.Correo }, async (err, user) => {
    console.log(user);
    if (err) {
      console.log(err);
    } else {
      if (user) {
        const validPass = await bcrypt.compare(
          req.body.Contraseña,
          user.Correo
        );
        if (!validPass)
          return res.status(401).send("Correo o contraseña incorrectas");

        let payload = { id: user._id, correo: user.Correo };
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
          "Ocurrio un error al tratar de recuperar todos los usuarios.",
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
