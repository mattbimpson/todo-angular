import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo';
import { TodoState } from '../store/initialState';

import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as actions from '../store/actions';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  constructor(private store: Store<any>) {}

  todoState$: Observable<Todo[]>;

  txtAdd = '';
  todos: Todo[] = [];

  ngOnInit() {
    this.todoState$ = this.store.select(state => state.todos);
    this.store.dispatch(new actions.GetTodos());
  }

  addTodo() {
    const todo = new Todo();
    todo.text = this.txtAdd;
    todo.completed = false;
    this.store.dispatch(new actions.AddTodo({todo}));
    this.txtAdd = '';
  }

  confirmEventReceived() {
    this.store.dispatch(new actions.RemoveAll());
  }

  removeTodo(id: string) {
    this.store.dispatch(new actions.RemoveTodo({id}));
  }

  todoId(index: number, todo: Todo) {
    return todo.id;
  }

  onKeydown(event) {
    if (event.key === 'Enter') {
      this.addTodo();
    }
  }
}
