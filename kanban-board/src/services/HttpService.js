export class HttpService {
  static #URL = 'http://localhost:3001';

  static #createRequest(type, body = null) {
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
    const body2 = this.#createRequest('POST', body);

    return fetch(`${HttpService.#URL}/${endpoint}`, body2);
  }

  static patch(endpoint, id, body) {
    return fetch(
      `${HttpService.#URL}/${endpoint}/${id}`,
      this.#createRequest('PATCH', body)
    );
  }

  static put(endpoint, id, body) {
    return fetch(
      `${HttpService.#URL}/${endpoint}/${id}`,
      this.createRequest('PUT', body)
    );
  }

  static delete(endpoint, id) {
    return fetch(
      `${HttpService.#URL}/${endpoint}/${id}`,
      this.createRequest('DELETE')
    );
  }
}
