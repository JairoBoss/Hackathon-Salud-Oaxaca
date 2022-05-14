const Medicamento = require("../models/medicamento.model.js");

exports.create = async (req, res) => {
  if (!req.body.Nombre) {
    res.status(400).send({
      message: "El medicamento debe de tener un nombre",
    });
    return;
  }

  const medicamentoNuevo = new Medicamento({
    Nombre: req.body.Nombre,
    Dosis: req.body.Dosis,
    Frecuencia: req.body.Frecuencia,
    Foto: req.body.Foto,
    Activo: req.body.Activo,
  });

  medicamentoNuevo.save((err, medicamentoNuevo) => {
    if (err) {
      console.log(err);
      res.status(500).send({
        message:
          err.message ||
          `Ocurrio un error al tratar de crear el medicamento ${req.body.Nombre}`,
      });
    } else {
      res.status(200).send(medicamentoNuevo);
    }
  });
};

exports.findAll = (req, res) => {
  Medicamento.find()
    .then((data) => {
      res.status(200).send(data);
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
  Medicamento.findById(req.params.id)
    .then((data) => {
      if (!data) {
        return res.status(404).send({
          message: `Medicamento con id: ${req.params.id} no encontrado`,
        });
      }
      res.status(200).send(data);
    })
    .catch((err) => {
      if (err.kind === "ObjectId") {
        return res.status(404).send({
          message: `Medicamento con id: ${req.params.id} no encontrado`,
        });
      }
      return res.status(500).send({
        message: `Error al recuperar datos del Medicamento con id: ${req.params.id}.`,
      });
    });
};

exports.update = (req, res) => {
  Medicamento.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((data) => {
      if (!data) {
        return res.status(404).send({
          message: `Medicamento con id: ${req.params.id}, no encontrado`,
        });
      }
      res.status(200).send(data);
    })
    .catch((err) => {
      if (err.kind === "ObjectId") {
        return res.status(404).send({
          message: `Medicamento con id: ${req.params.id}, no encontrado`,
        });
      }
      return res.status(500).send({
        message: `Error al actualizar el Medicamento con id: ${req.params.id}`,
      });
    });
};

exports.delete = (req, res) => {
  Medicamento.findByIdAndRemove(req.params.id)
    .then((data) => {
      if (!data) {
        return res.status(404).send({
          message: `Medicamento con id: ${req.params.id}, no encontrado`,
        });
      }
      res.send({ message: "Medicamento eliminado con exito!" });
    })
    .catch((err) => {
      if (err.kind === "ObjectId" || err.name === "NotFound") {
        return res.status(404).send({
          message: `Medicamento con id: ${req.params.id}, no encontrado`,
        });
      }
      return res.status(500).send({
        message: `Ocurrio un error al eliminar al Medicamento con id: ${req.params.id}.`,
      });
    });
};
