import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'todo-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
export class ItemComponent implements OnInit {
  @Input() todoItem: { key: string; value: boolean };
  @Output() remove: EventEmitter<string> = new EventEmitter();
  @Output() complete: EventEmitter<{
    title: string;
    checked: boolean;
  }> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  removeItem(): void {
    if (confirm('Are you sure to delete this item?')) {
      this.remove.emit(this.todoItem.key);
    }
  }

  completeItem(): void {
    this.complete.emit({
      title: this.todoItem.key,
      checked: !this.todoItem.value,
    });
  }
}
