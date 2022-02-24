export class HttpService {
  static URL = 'http://localhost:3001';
  static getAll(endpoint) {
    return fetch(`${HttpService.URL}/${endpoint}`);
  }
}
