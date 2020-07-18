import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'todo-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
export class ItemComponent implements OnInit {
  @Input() todoItem: { title: string };
  @Output() remove: EventEmitter<{ title: string }> = new EventEmitter();

  isComplete: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  removeItem(): void {
    if (confirm('Are you sure to delete this item?')) {
      this.remove.emit(this.todoItem);
    }
  }

  completeItem(): void {
    this.isComplete = !this.isComplete;
  }
}
