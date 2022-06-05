const PerfilMedico = require("../models/perfilMedico.model.js");

exports.create = async (req, res) => {
  if (!req.body.Usuario) {
    res.status(400).send({
      message: "El Perfil Medico debe de tener un usuario asignado",
    });
    return;
  }

  const perfilMedicoNuevo = new PerfilMedico({
    Usuario: req.body.Usuario,
    Enfermedades: req.body.Enfermedades,
    Medicamentos: req.body.Medicamentos,
    Documentos: req.body.Documentos,
    Examenes: req.body.Examenes,
    Eventos: req.body.Eventos,
    // Habito: req.body.Habito,
  });

  perfilMedicoNuevo.save((err, perfilMedicoNuevo) => {
    if (err) {
      console.log(err);
      res.status(500).send({
        message:
          err.message ||
          `Ocurrio un error al tratar de crear el perfil medico del usuario${req.body.Usuario}`,
      });
    } else {
      res.status(200).send(perfilMedicoNuevo);
    }
  });
};

exports.findAll = (req, res) => {
  PerfilMedico.find()
    .populate("Enfermedades")
    .populate("Medicamentos")
    .populate("Documentos")
    .populate("Examenes")
    .populate("Eventos")
    .exec((err, data) => {
      if (err) {
        console.log(err);
        res.status(500).send({
          message:
            err.message ||
            `Ocurrio un error al tratar de recuperar todos los expedientes medicos`,
        });
      } else {
        res.status(200).send(data);
      }
    });
};

exports.findOne = (req, res) => {
  PerfilMedico.findById(req.params.id)
    .populate("Enfermedades")
    .populate("Medicamentos")
    .populate("Documentos")
    .populate("Examenes")
    .populate("Eventos")
    .exec((err, data) => {
      if (err) {
        console.log(err);
        res.status(500).send({
          message:
            err.message ||
            `Ocurrio un error al tratar de recuperar la el perfil medicoco id ${req.params.id}`,
        });
      } else {
        res.status(200).send(data);
      }
    });
};

exports.update = (req, res) => {
  PerfilMedico.findByIdAndUpdate(req.params.id, req.body)
    .populate("Enfermedades")
    .populate("Medicamentos")
    .populate("Documentos")
    .populate("Examenes")
    .populate("Eventos")
    .exec((err, data) => {
      if (err) {
        console.log(err);
        res.status(500).send({
          message:
            err.message ||
            `Ocurrio un error al tratar de actualizar el perfil medico`,
        });
      } else {
        res.status(200).send(data);
      }
    });
};

exports.delete = (req, res) => {
  PerfilMedico.findByIdAndRemove(req.params.id)
    .then((data) => {
      if (!data) {
        return res.status(404).send({
          message: `Perfil medico con id: ${req.params.id}, no encontrado`,
        });
      }
      res.send({ message: "Perfil medico eliminado con exito!" });
    })
    .catch((err) => {
      if (err.kind === "ObjectId" || err.name === "NotFound") {
        return res.status(404).send({
          message: `Perfil medico con id: ${req.params.id}, no encontrado`,
        });
      }
      return res.status(500).send({
        message: `Ocurrio un error al eliminar al perfil medico con id: ${req.params.id}.`,
      });
    });
};

exports.findByUserId = (req, res) => {
  PerfilMedico.find({ Usuario: req.params.id })
    .populate("Enfermedades")
    .populate("Medicamentos")
    .populate("Documentos")
    .populate("Examenes")
    .populate("Eventos")
    .exec((err, data) => {
      if (err) {
        console.log(err);
        res.status(500).send({
          message:
            err.message ||
            `Ocurrio un error al tratar de recuperar la el perfil medicoco del usuario con  id ${req.params.id}`,
        });
      } else {
        res.status(200).send(data);
      }
    });
};
