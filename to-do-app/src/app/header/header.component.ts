import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'todo-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  title = "Joseph's Todo App";

  constructor() {}

  ngOnInit(): void {}
}
