const Enfermedad = require("../models/enfermedad.model.js");

exports.create = async (req, res) => {
  if (!req.body.Nombre) {
    res.status(400).send({
      message: "La enfermedad debe de tener un nombre",
    });
    return;
  }

  const enfermedadNueva = new Enfermedad({
    Nombre: req.body.Nombre,
    Fecha_Diagnostico: req.body.Fecha_Diagnostico,
  });

  enfermedadNueva.save((err, enfermedadNueva) => {
    if (err) {
      console.log(err);
      res.status(500).send({
        message:
          err.message ||
          `Ocurrio un error al tratar de crear la enfermedad ${req.body.Nombre}`,
      });
    } else {
      res.status(200).send(enfermedadNueva);
    }
  });
};

exports.findAll = (req, res) => {
  Enfermedad.find()
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message ||
          "Ocurrio un error al tratar de recuperar todas las enfermedades.",
      });
    });
};

exports.findOne = (req, res) => {
  Enfermedad.findById(req.params.id)
    .then((data) => {
      if (!data) {
        return res.status(404).send({
          message: `Enfermedad con id: ${req.params.id} no encontrada`,
        });
      }
      res.status(200).send(data);
    })
    .catch((err) => {
      if (err.kind === "ObjectId") {
        return res.status(404).send({
          message: `Enfermedad con id: ${req.params.id} no encontrada`,
        });
      }
      return res.status(500).send({
        message: `Error al recuperar los datos de la enfermedad con id: ${req.params.id}.`,
      });
    });
};

exports.update = (req, res) => {
  Enfermedad.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((data) => {
      if (!data) {
        return res.status(404).send({
          message: `Enfermedad con id: ${req.params.id}, no encontrada`,
        });
      }
      res.status(200).send(data);
    })
    .catch((err) => {
      if (err.kind === "ObjectId") {
        return res.status(404).send({
          message: `Enfermedad con id: ${req.params.id}, no encontrada`,
        });
      }
      return res.status(500).send({
        message: `Error al actualizar la enfermedad con id: ${req.params.id}`,
      });
    });
};

exports.delete = (req, res) => {
  Enfermedad.findByIdAndRemove(req.params.id)
    .then((data) => {
      if (!data) {
        return res.status(404).send({
          message: `Enfermedad con id: ${req.params.id}, no encontrada`,
        });
      }
      res.send({ message: "Enfermedad eliminada con exito!" });
    })
    .catch((err) => {
      if (err.kind === "ObjectId" || err.name === "NotFound") {
        return res.status(404).send({
          message: `Enfermedad con id: ${req.params.id}, no encontrada`,
        });
      }
      return res.status(500).send({
        message: `Ocurrio un error al eliminar la Enfermedad con id: ${req.params.id}.`,
      });
    });
};
