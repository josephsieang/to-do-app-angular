import { Injectable } from '@angular/core';

const storageName = 'joseph_todo_list';
const defaultList = [
  { title: 'install NodeJS' },
  { title: 'install Angular CLI' },
  { title: 'create new app' },
  { title: 'serve app' },
  { title: 'develop app' },
  { title: 'deploy app' },
];

@Injectable({
  providedIn: 'root',
})
export class TodoListStorageService {
  private todoList: Array<{ title: string }>;

  constructor() {
    this.todoList =
      JSON.parse(localStorage.getItem(storageName)) || defaultList;
    console.log('TodoListStorageService: ', this.todoList);
  }

  get(): Array<{ title: string }> {
    return this.todoList;
  }

  private update(): Array<{ title: string }> {
    localStorage.setItem(storageName, JSON.stringify(this.todoList));
    return this.get();
  }

  post(item: { title: string }): Array<{ title: string }> {
    this.todoList.push(item);
    return this.update();
  }

  private findItemIndex(item: { title: string }): number {
    return this.todoList.indexOf(item);
  }

  put(
    item: { title: string },
    changes: { title: string }
  ): Array<{ title: string }> {
    Object.assign(this.todoList[this.findItemIndex(item)], changes);
    return this.update();
  }

  destroy(item: { title: string }): Array<{ title: string }> {
    this.todoList.splice(this.findItemIndex(item), 1);
    return this.update();
  }
}
