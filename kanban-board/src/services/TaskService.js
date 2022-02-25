import { HttpService } from './HttpService';

export class TaskService {
  static #ENDPOINT = 'tasks';

  static getAll() {
    return HttpService.getAll(this.#ENDPOINT);
  }

  static getById(id) {
    return HttpService.get(this.#ENDPOINT, id);
  }

  static post(body) {
    return HttpService.post(this.#ENDPOINT, body);
  }

  static patch(id, body) {
    return HttpService.patch(this.#ENDPOINT, id, body);
  }
}