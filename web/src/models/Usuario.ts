export interface IUsuario {
  _id?: string;
  nombre: string;
  correo: string;
  contraseña: string;
}

export class Usuario implements IUsuario {
  _id?: string;
  nombre: string;
  correo: string;
  contraseña: string;

  constructor(data: IUsuario) {
    this._id = data._id;
    this.nombre = data.nombre;
    this.correo = data.correo;
    this.contraseña = data.contraseña;
  }
}
