import { Component, OnInit } from '@angular/core';
import { TodoListService } from '../todo-list.service';

@Component({
  selector: 'todo-list-manager',
  templateUrl: './list-manager.component.html',
  styleUrls: ['./list-manager.component.css'],
})
export class ListManagerComponent implements OnInit {
  todoList: Array<{ title: string }>;

  constructor(private todoListService: TodoListService) {}

  ngOnInit(): void {
    console.log('ngOnInit() in list-manager');
    this.todoList = this.todoListService.getTodoList();
  }

  addItem(title: string): void {
    this.todoList = this.todoListService.addItem({ title });
  }

  removeItem(item: { title: string }): void {
    this.todoList = this.todoListService.removeItem(item);
  }
}
