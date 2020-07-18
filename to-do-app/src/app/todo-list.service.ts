import { Injectable } from '@angular/core';
import { TodoListStorageService } from './todo-list-storage.service';

@Injectable({
  providedIn: 'root',
})
export class TodoListService {
  constructor(private storage: TodoListStorageService) {}

  getTodoList(): Map<string, boolean> {
    return this.storage.get();
  }

  addItem(title: string): Map<string, boolean> {
    return this.storage.post(title);
  }

  removeItem(title: string): Map<string, boolean> {
    return this.storage.destroy(title);
  }

  completeItem(title: string, checked: boolean): Map<string, boolean> {
    return this.storage.put(title, checked);
  }
}
