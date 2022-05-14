const Evento = require("../models/evento.model.js");

exports.create = async (req, res) => {
  if (!req.body.Nombre) {
    res.status(400).send({
      message: "El evento debe de tener un nombre",
    });
    return;
  }

  const eventoNuevo = new Evento({
    Nombre: req.body.Nombre,
    Descripcion: req.body.Descripcion,
    Foto: req.body.Foto,
    Fecha: req.body.Fecha,
  });

  eventoNuevo.save((err, eventoNuevo) => {
    if (err) {
      console.log(err);
      res.status(500).send({
        message:
          err.message ||
          `Ocurrio un error al tratar de crear el evento ${req.body.Nombre}`,
      });
    } else {
      res.status(200).send(eventoNuevo);
    }
  });
};

exports.findAll = (req, res) => {
  Evento.find()
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
  Evento.findById(req.params.id)
    .then((data) => {
      if (!data) {
        return res.status(404).send({
          message: `Evento con id: ${req.params.id} no encontrado`,
        });
      }
      res.status(200).send(data);
    })
    .catch((err) => {
      if (err.kind === "ObjectId") {
        return res.status(404).send({
          message: `Evento con id: ${req.params.id} no encontrado`,
        });
      }
      return res.status(500).send({
        message: `Error al recuperar datos del evento con id: ${req.params.id}.`,
      });
    });
};

exports.update = (req, res) => {
  Evento.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((data) => {
      if (!data) {
        return res.status(404).send({
          message: `Evento con id: ${req.params.id}, no encontrado`,
        });
      }
      res.status(200).send(data);
    })
    .catch((err) => {
      if (err.kind === "ObjectId") {
        return res.status(404).send({
          message: `Evento con id: ${req.params.id}, no encontrado`,
        });
      }
      return res.status(500).send({
        message: `Error al actualizar el evento con id: ${req.params.id}`,
      });
    });
};

exports.delete = (req, res) => {
  Evento.findByIdAndRemove(req.params.id)
    .then((data) => {
      if (!data) {
        return res.status(404).send({
          message: `Evento con id: ${req.params.id}, no encontrado`,
        });
      }
      res.send({ message: "Evento eliminado con exito!" });
    })
    .catch((err) => {
      if (err.kind === "ObjectId" || err.name === "NotFound") {
        return res.status(404).send({
          message: `Evento con id: ${req.params.id}, no encontrado`,
        });
      }
      return res.status(500).send({
        message: `Ocurrio un error al eliminar al evento con id: ${req.params.id}.`,
      });
    });
};
