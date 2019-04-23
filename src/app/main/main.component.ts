import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  addTodo() {
    window.alert('add todo');
  }

  todos: Todo[] = [{ id: 0, text: 'first item'}, { id: 1, text: 'second' }];

}
