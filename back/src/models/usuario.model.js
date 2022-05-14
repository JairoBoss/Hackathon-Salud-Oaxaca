const mongoose = require("mongoose");

const UsuarioSchema = mongoose.Schema({
  // nombre: {
  //   type: String,
  //   required: true,
  // },
  // correo: {
  //   type: String,
  //   required: true,
  // },
  // contraseña: {
  //   type: String,
  //   required: true,
  // },
  Nombre: {
    type: String
  },
  Apellido_Paterno: {
    type: String
  },
  Apellido_Materno: {
    type: String
  },
  Sexo: {
    type: String
  },
  Telefono: {
    type: String
  },
  Correo: {
    type: String
  },
  Fecha_Nacimiento: {
    type: Date
  },
  Lugar_Nacimiento: {
    type: String
  },
  Peso: {
    type: Number
  },
  Cintura: {
    type: Number
  },
  Altura: {
    type: Number
  },
  Tipo_Sangre: {
    type: String
  },
  Alergias: [{
    type: String
  }],
  Correo: {
    type: String
  },
  Contraseña: {
    type: String
  }
});

module.exports = mongoose.model("Usuario", UsuarioSchema)