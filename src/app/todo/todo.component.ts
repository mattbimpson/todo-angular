import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() todo:Todo;
  @Output() removed = new EventEmitter<number>();

  remove(id: number) {
    this.removed.emit(id);
  }

}
