export class HttpService {
  static #URL = 'http://localhost:3001';

  static #REQUEST_TYPE = Object.freeze({
    POST: 'POST',
    PATCH: 'PATCH',
    UPDATE: 'UPDATE',
    DELETE: 'DELETE',
  });

  static #createRequest(type, body = {}) {
    return {
      method: [type],
      headers: { 'Content-Type': 'application/json' },
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
    const q = this.#createRequest(HttpService.#REQUEST_TYPE.POST, body);
    return fetch(`${HttpService.#URL}/${endpoint}`, q);
  }

  static patch(endpoint, id, body) {
    return fetch(
      `${HttpService.#URL}/${endpoint}/${id}`,
      this.#createRequest(HttpService.#REQUEST_TYPE.PATCH, body)
    );
  }

  static put(endpoint, id, body) {
    return fetch(
      `${HttpService.#URL}/${endpoint}/${id}`,
      this.createRequest(HttpService.#REQUEST_TYPE.PUT, body)
    );
  }

  static delete(endpoint, id) {
    return fetch(
      `${HttpService.#URL}/${endpoint}/${id}`,
      this.createRequest(HttpService.#REQUEST_TYPE.DELETE)
    );
  }

  static async executeRequest(request, ...params) {
    try {
      const response = await request(...params);
      const data = await response.json();
      if (!response.ok) {
        throw new Error('Request has failed.');
      }
      return data;
    } catch (e) {
      console.error(e);
    }
  }
}
