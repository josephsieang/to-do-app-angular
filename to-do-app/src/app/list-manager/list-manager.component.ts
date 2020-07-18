import { Component, OnInit } from '@angular/core';
import { TodoListService } from '../todo-list.service';

@Component({
  selector: 'todo-list-manager',
  templateUrl: './list-manager.component.html',
  styleUrls: ['./list-manager.component.css'],
})
export class ListManagerComponent implements OnInit {
  todoList: Map<string, boolean>;

  constructor(private todoListService: TodoListService) {}

  ngOnInit(): void {
    console.log('ngOnInit() in list-manager');
    this.todoList = this.todoListService.getTodoList();
  }

  addItem(title: string): void {
    this.todoList = this.todoListService.addItem(title);
  }

  removeItem(title: string): void {
    this.todoList = this.todoListService.removeItem(title);
  }

  completeItem(completeObj: { title: string; checked: boolean }): void {
    this.todoList = this.todoListService.completeItem(
      completeObj.title,
      completeObj.checked
    );
  }

  // help to perserve the insertion order of map
  // otherwise html will show the ascending order of todo-title
  // Resource: https://blog.kevinyang.net/2020/02/13/angular-keyvaluepipe/
  compareFn(_a: string, _b: string): number {
    return 0;
  }
}
