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
      ref: "Enfermedades",
    },
  ],
  Medicamentos: [
    {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "Medicamentos",
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
    ref: "Examenes",
  }],
  Eventos: [
    {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "Eventos",
    },
  ],
  // Habito:{
  //   type: Schema.Types.ObjectId,
  //   required: true,
  //   ref: "Habito",
  // }

});

module.exports = mongoose.model("PerfilMedico", PerfilMedicoSchema);
