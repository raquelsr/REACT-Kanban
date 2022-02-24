import { HttpService } from './HttpService';

export class ColumnService {
  static #ENDPOINT = 'columns';

  static getAll() {
    return HttpService.getAll(this.#ENDPOINT);
  }

  static post(body) {
    return HttpService.post(this.#ENDPOINT, body);
  }

  static patch(id, body) {
    return HttpService.patch(this.#ENDPOINT, id, body);
  }
}
