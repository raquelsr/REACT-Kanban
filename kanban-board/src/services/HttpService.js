export class HttpService {
  static #URL = 'http://localhost:3001';

  static #HEADERS = Object.freeze({
    'Content-Type': 'application/json',
  });

  static #REQUEST_TYPE = Object.freeze({
    POST: 'POST',
    PATCH: 'PATCH',
    UPDATE: 'UPDATE',
    DELETE: 'DELETE',
  });

  static #createRequest(type, body = null) {
    return {
      method: [type],
      headers: [this.#HEADERS],
      body: JSON.stringify(body),
    };
  }

  static getAll(endpoint) {
    return fetch(`${HttpService.#URL}/${endpoint}`);
  }

  static get(endpoint, id) {
    return fetch(`${HttpService.#URL}/${endpoint}/${id}`);
  }

  static post(endpoint, body) {
    return fetch(
      `${HttpService.#URL}/${endpoint}`,
      this.#createRequest(this.#REQUEST_TYPE.POST, body)
    );
  }

  static patch(endpoint, id, body) {
    return fetch(
      `${HttpService.#URL}/${endpoint}/${id}`,
      this.#createRequest(this.#REQUEST_TYPE.PATCH, body)
    );
  }

  static put(endpoint, id, body) {
    return fetch(
      `${HttpService.#URL}/${endpoint}/${id}`,
      this.createRequest(this.#REQUEST_TYPE.PUT, body)
    );
  }

  static delete(endpoint, id) {
    return fetch(
      `${HttpService.#URL}/${endpoint}/${id}`,
      this.createRequest(this.#REQUEST_TYPE.DELETE)
    );
  }
}
