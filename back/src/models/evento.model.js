const mongoose = require('mongoose');
var Schema = mongoose.Schema;
var EventoSchema = new Schema({
  Nombre: {
    type: String
  },
  Descripcion: {
    type: String
  },
  Foto: {
    type: String
  },
  Fecha: {
    type: Date
  }
});

module.exports = mongoose.model("Evento", EventoSchema)