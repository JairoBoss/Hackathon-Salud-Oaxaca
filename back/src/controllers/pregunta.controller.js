const Pregunta = require("../models/pregunta.model.js");

exports.create = async (req, res) => {
  if (!req.body.Descripcion) {
    res.status(400).send({
      message: "La pregunta debe de tener una pregunta",
    });
    return;
  }

  const preguntaNueva = new Pregunta({
    Descripcion: req.body.Descripcion,
    Numero: req.body.Numero,
  });

  preguntaNueva.save((err, preguntaNueva) => {
    if (err) {
      console.log(err);
      res.status(500).send({
        message:
          err.message ||
          `Ocurrio un error al tratar de crear la pregunta ${req.body.Pregunta}`,
      });
    } else {
      res.status(200).send(preguntaNueva);
    }
  });
};

exports.findAll = (req, res) => {
  Pregunta.find()
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message ||
          "Ocurrio un error al tratar de recuperar todas las preguntas.",
      });
    });
};

exports.findOne = (req, res) => {
  Pregunta.findById(req.params.id)
    .then((data) => {
      if (!data) {
        return res.status(404).send({
          message: `Pregunta con id: ${req.params.id} no encontrada`,
        });
      }
      res.status(200).send(data);
    })
    .catch((err) => {
      if (err.kind === "ObjectId") {
        return res.status(404).send({
          message: `Pregunta con id: ${req.params.id} no encontrada`,
        });
      }
      return res.status(500).send({
        message: `Error al recuperar datos de la pregunta con id: ${req.params.id}.`,
      });
    });
};

exports.update = (req, res) => {
  Pregunta.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((data) => {
      if (!data) {
        return res.status(404).send({
          message: `Pregunta con id: ${req.params.id}, no encontrada`,
        });
      }
      res.status(200).send(data);
    })
    .catch((err) => {
      if (err.kind === "ObjectId") {
        return res.status(404).send({
          message: `Pregunta con id: ${req.params.id}, no encontrada`,
        });
      }
      return res.status(500).send({
        message: `Error al actualizar la pregunta con id: ${req.params.id}`,
      });
    });
};

exports.delete = (req, res) => {
  Pregunta.findByIdAndRemove(req.params.id)
    .then((data) => {
      if (!data) {
        return res.status(404).send({
          message: `Pregunta con id: ${req.params.id}, no encontrada`,
        });
      }
      res.send({ message: "Pregunta eliminada con exito!" });
    })
    .catch((err) => {
      if (err.kind === "ObjectId" || err.name === "NotFound") {
        return res.status(404).send({
          message: `Pregunta con id: ${req.params.id}, no encontrada`,
        });
      }
      return res.status(500).send({
        message: `Ocurrio un error al eliminar la Pregunta con id: ${req.params.id}.`,
      });
    });
};
