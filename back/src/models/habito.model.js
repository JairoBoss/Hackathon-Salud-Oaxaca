var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var HabitoSchema = new Schema({
  Alcohol: {
    type: Boolean
  },
  Fuma: {
    type: Boolean
  },
  Deporte: {
    type: Boolean
  },
  
});

module.exports = mongoose.model("Habito", HabitoSchema)