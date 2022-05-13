import { Usuario } from "../models/Usuario";
import httpClient from "./HttpClient";

const prefix = "usuario"


export default class UserService {
  static async create(user: Usuario) {
    return (await httpClient.post(`${prefix}/`, user)).data;
  }

  static async update(user: Usuario) {
    return (await httpClient.put(`${prefix}/${user._id}`, user)).data;
  }

  static async remove(id: number) {
    return (await httpClient.delete(`${prefix}/${id}`)).data;
  }

  static async login(data: any) {
    return (await httpClient.post(`${prefix}/login`, data)).data;
  }

  static async getAll() {
    return (await httpClient.get(`${prefix}/`)).data;
  }
  
}