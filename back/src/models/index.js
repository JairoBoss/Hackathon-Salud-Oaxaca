const mongoose = require("mongoose");
const dbConfig = require("../config/db.config.js");

mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;

db.app = require("./usuario.model.js")(mongoose);
db.app = require("./evento.model.js")(mongoose);
db.app = require("./medicamento.model.js")(mongoose);
db.app = require("./enfermedad.model.js")(mongoose);
db.app = require("./pregunta.model.js")(mongoose);
db.app = require("./examen.model.js")(mongoose);
db.app = require("./perfilMedico.model.js")(mongoose);

module.exports = db;
