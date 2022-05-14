var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var PreguntaSchema = new Schema({
  Descripcion: {
    type: String
  },
  Numero: {
    type: Number
  }
});

module.exports = mongoose.model("Pregunta", PreguntaSchema)