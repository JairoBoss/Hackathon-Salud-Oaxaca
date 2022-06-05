var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var PerfilMedicoSchema = new Schema({
  Usuario: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "Usuario",
  },
  Enfermedades: [
    {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "Enfermedad",
    },
  ],
  Medicamentos: [
    {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "Medicamento",
    },
  ],
  Documentos: [
    {
      type: String,
    },
  ],
  Examenes: [{
    type: Schema.Types.ObjectId,
    required: true,
    ref: "Examen",
  }],
  Eventos: [
    {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "Evento",
    },
  ],
  // Habito:{
  //   type: Schema.Types.ObjectId,
  //   required: true,
  //   ref: "Habito",
  // }

});

module.exports = mongoose.model("PerfilMedico", PerfilMedicoSchema);
