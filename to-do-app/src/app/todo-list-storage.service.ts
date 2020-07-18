import { Injectable, OnInit } from '@angular/core';
import { HelperService } from './helper.service';

const storageName = 'joseph_todo_list';
const defaultList = new Map();
defaultList.set('install NodeJS', false);
defaultList.set('install Angular CLI', false);
defaultList.set('create new app', false);
defaultList.set('serve app', false);
defaultList.set('develop app', false);
defaultList.set('deploy app', false);

@Injectable({
  providedIn: 'root',
})
export class TodoListStorageService {
  private todoList: Map<string, boolean>;

  constructor(private helperService: HelperService) {
    if (localStorage.getItem(storageName) !== null)
      this.todoList = this.helperService.jsonToMap(
        localStorage.getItem(storageName)
      );
    else this.todoList = defaultList;
    console.log('defaultList: ', defaultList);
    console.log('this.todoList: ', this.todoList);
  }

  get(): Map<string, boolean> {
    return this.todoList;
  }

  private update(): Map<string, boolean> {
    localStorage.setItem(
      storageName,
      this.helperService.mapToJson(this.todoList)
    );
    console.log(this.get());
    return this.get();
  }

  post(title: string): Map<string, boolean> {
    this.todoList.set(title, false);
    return this.update();
  }

  put(title: string, checked: boolean): Map<string, boolean> {
    this.todoList.set(title, checked);
    return this.update();
  }

  destroy(title: string): Map<string, boolean> {
    this.todoList.delete(title);
    return this.update();
  }
}
