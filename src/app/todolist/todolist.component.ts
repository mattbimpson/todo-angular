import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {

  message = 'my todos';

  todo: Todo = {
    id: 0,
    text: 'default todo'
  };

  constructor() { }

  ngOnInit() {
  }

}
