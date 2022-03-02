import { HttpService } from './HttpService';

export class ColumnService {
  static ENDPOINT = 'columns';

  static getAll() {
    return HttpService.getAll(ColumnService.ENDPOINT);
  }

  static post(body) {
    return HttpService.post(ColumnService.ENDPOINT, body);
  }

  static patch(id, body) {
    return HttpService.patch(ColumnService.ENDPOINT, id, body);
  }

  static put(id, body) {
    return HttpService.put(ColumnService.ENDPOINT, body);
  }
}
