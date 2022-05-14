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



// var mongoose = require('mongoose');
// var Schema = mongoose.Schema;
// var PreguntaSchema = new Schema({
//   Pregunta: {
//     type: String
//   },
//   // Para poner las respuestas
//   // Le duele el pecho?
//   // Respuesta 1: Si, tiene un valor de 20 punto
//   // Respuesta 2: Creo, tiene un valor de 15 punto
//   Respuestas: [{
//     type: String,
//     type: Number
//   }],
//   // Para guardar lo que haya sacado 
//   // Le duele el pecho?
//   // Respuesta 1: Si, tiene un valor de 20 punto
//   // Respuesta 2: Creo, tiene un valor de 15 punto
//   Puntaje: [{
//     type: String,
//     type: Number
//   }],

// });

// module.exports = mongoose.model("Pregunta", PreguntaSchema)