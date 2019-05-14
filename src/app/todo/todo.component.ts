import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  constructor() { }

  @Input() todo: Todo;
  @Output() removed = new EventEmitter<string>();

  ngOnInit() {
  }

  remove(id: string) {
    this.removed.emit(id);
  }

  completedChanged() {
    this.todo.completed = !this.todo.completed;
  }
}
