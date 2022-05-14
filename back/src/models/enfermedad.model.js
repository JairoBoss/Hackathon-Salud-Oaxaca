var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var EnfermedadSchema = new Schema({
  Nombre: {
    type: String
  },
  Fecha_Diagnostico: {
    type: String
  }
});

module.exports = mongoose.model("Enfermedad", EnfermedadSchema)