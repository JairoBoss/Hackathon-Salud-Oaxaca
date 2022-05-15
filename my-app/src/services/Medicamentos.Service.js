import httpClient from "./HttpClient";

const prefix = "/medicamento";

export default class MedicamentosService {
  static async create(medicamento) {
    return (await httpClient.post(`${prefix}`, medicamento)).data;
  }

  static async update(id, medicamento) {
    return (await httpClient.put(`${prefix}/${id}`, medicamento)).data;
  }

  static async remove(id) {
    return (await httpClient.delete(`${prefix}/${id}`)).data;
  }

  static async getAll() {
    return (await httpClient.get(`${prefix}/`)).data;
  }

  static async get(id) {
    return (await httpClient.get(`${prefix}/${id}`)).data;
  }
}
