import { Injectable } from '@angular/core';
import { TodoListStorageService } from './todo-list-storage.service';

@Injectable({
  providedIn: 'root',
})
export class TodoListService {
  constructor(private storage: TodoListStorageService) {}

  getTodoList(): Array<{ title: string }> {
    return this.storage.get();
  }

  addItem(item: { title: string }): Array<{ title: string }> {
    return this.storage.post(item);
  }

  removeItem(item: { title: string }): Array<{ title: string }> {
    return this.storage.destroy(item);
  }
}
