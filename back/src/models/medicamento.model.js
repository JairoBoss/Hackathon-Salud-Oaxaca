var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var MedicamentoSchema = new Schema({
  Nombre: {
    type: String
  },
  Dosis: {
    type: String
  },
  Frecuencia: {
    type: String
  },
  Foto: {
    type: String
  },
  Activo: {
    type: Boolean
  }
});

module.exports = mongoose.model("Medicamento", MedicamentoSchema)