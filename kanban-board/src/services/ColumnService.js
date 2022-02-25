import { HttpService } from './HttpService';

export class ColumnService {
  static #ENDPOINT = 'columns';

  static getAll() {
    return HttpService.getAll('columns');
  }

  static post(body) {
    return HttpService.post('columns', body);
  }

  static patch(id, body) {
    return HttpService.patch('columns', id, body);
  }
}
