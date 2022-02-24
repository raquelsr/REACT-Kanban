import { HttpService } from './HttpService';

export class TaskService {
  static getAll() {
    return HttpService.getAll('tasks');
  }
}
