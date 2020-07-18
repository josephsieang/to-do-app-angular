import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  ElementRef,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'todo-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})

// OnInit: interface
export class InputComponent implements OnInit {
  title: string = '';
  @Output() submit: EventEmitter<string> = new EventEmitter();
  @ViewChild('inputRef') inputRef: ElementRef;

  constructor() {}

  ngOnInit(): void {}

  submitValue(newTitle: string): void {
    this.submit.emit(newTitle);
    this.inputRef.nativeElement.value = '';
  }
}
