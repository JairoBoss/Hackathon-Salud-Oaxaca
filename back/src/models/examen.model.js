var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Examenes = new Schema({
  Tipo: {
    type: String
  },
  Fecha: {
    type: String
  },
  Preguntas: [{
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'Preguntas'
  }]
});

module.exports = mongoose.model("Examen", ExamenSchema)