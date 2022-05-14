const Habito = require("../models/habito.model.js");

exports.create = async (req, res) => {
  const habitoNuevo = new Habito({
    Alcohol: req.body.Alcohol,
    Fuma: req.body.Fuma,
    Deporte: req.body.Deporte,
  });

  habitoNuevo.save((err, habitoNuevo) => {
    if (err) {
      console.log(err);
      res.status(500).send({
        message:
          err.message ||
          `Ocurrio un error al tratar de crear el habito ${req.body.Nombre}`,
      });
    } else {
      res.status(200).send(habitoNuevo);
    }
  });
};

exports.findAll = (req, res) => {
  Habito.find()
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message ||
          "Ocurrio un error al tratar de recuperar todos los habitos.",
      });
    });
};

exports.findOne = (req, res) => {
  Habito.findById(req.params.id)
    .then((data) => {
      if (!data) {
        return res.status(404).send({
          message: `Habito con id: ${req.params.id} no encontrado`,
        });
      }
      res.status(200).send(data);
    })
    .catch((err) => {
      if (err.kind === "ObjectId") {
        return res.status(404).send({
          message: `Habito con id: ${req.params.id} no encontrado`,
        });
      }
      return res.status(500).send({
        message: `Error al recuperar datos del habito con id: ${req.params.id}.`,
      });
    });
};

exports.update = (req, res) => {
  Habito.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((data) => {
      if (!data) {
        return res.status(404).send({
          message: `Habito con id: ${req.params.id}, no encontrado`,
        });
      }
      res.status(200).send(data);
    })
    .catch((err) => {
      if (err.kind === "ObjectId") {
        return res.status(404).send({
          message: `Habito con id: ${req.params.id}, no encontrado`,
        });
      }
      return res.status(500).send({
        message: `Error al actualizar el habito con id: ${req.params.id}`,
      });
    });
};

exports.delete = (req, res) => {
  Habito.findByIdAndRemove(req.params.id)
    .then((data) => {
      if (!data) {
        return res.status(404).send({
          message: `Habito con id: ${req.params.id}, no encontrado`,
        });
      }
      res.send({ message: "Habito eliminado con exito!" });
    })
    .catch((err) => {
      if (err.kind === "ObjectId" || err.name === "NotFound") {
        return res.status(404).send({
          message: `Habito con id: ${req.params.id}, no encontrado`,
        });
      }
      return res.status(500).send({
        message: `Ocurrio un error al eliminar al habito con id: ${req.params.id}.`,
      });
    });
};
