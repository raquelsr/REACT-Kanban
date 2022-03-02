import { HttpService } from './HttpService';

export class TaskService {
  static ENDPOINT = 'tasks';

  static getAll() {
    return HttpService.getAll(TaskService.ENDPOINT);
  }

  static getById(id) {
    return HttpService.get(TaskService.ENDPOINT, id);
  }

  static post(body) {
    return HttpService.post(TaskService.ENDPOINT, body);
  }

  static patch(id, body) {
    return HttpService.patch(TaskService.ENDPOINT, id, body);
  }
}
